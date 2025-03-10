// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ArticleEmbargoUpdaterEmbargoTypeEnum - Embargo can be enabled at the article or the file level. Possible values: article, file
type ArticleEmbargoUpdaterEmbargoTypeEnum string

const (
	ArticleEmbargoUpdaterEmbargoTypeEnumArticle ArticleEmbargoUpdaterEmbargoTypeEnum = "article"
	ArticleEmbargoUpdaterEmbargoTypeEnumFile    ArticleEmbargoUpdaterEmbargoTypeEnum = "file"
)

func (e ArticleEmbargoUpdaterEmbargoTypeEnum) ToPointer() *ArticleEmbargoUpdaterEmbargoTypeEnum {
	return &e
}

func (e *ArticleEmbargoUpdaterEmbargoTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "article":
		fallthrough
	case "file":
		*e = ArticleEmbargoUpdaterEmbargoTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ArticleEmbargoUpdaterEmbargoTypeEnum: %v", v)
	}
}

// ArticleEmbargoUpdater - Embargo description
type ArticleEmbargoUpdater struct {
	// Date when the embargo expires and the article gets published, '0' value will set up permanent embargo
	EmbargoDate string `json:"embargo_date"`
	// List of embargo permissions to be associated with the article. The list must contain `id` and can also contain `group_ids`(a field that only applies to 'logged_in' permissions). The new list replaces old options in the database, and an empty list removes all permissions for this article. Administration permission has to be set up alone but logged in and IP range permissions can be set up together.
	EmbargoOptions []map[string]interface{} `json:"embargo_options,omitempty"`
	// Reason for setting embargo
	EmbargoReason *string `json:"embargo_reason,omitempty"`
	// Title for embargo
	EmbargoTitle *string `json:"embargo_title,omitempty"`
	// Embargo can be enabled at the article or the file level. Possible values: article, file
	EmbargoType ArticleEmbargoUpdaterEmbargoTypeEnum `json:"embargo_type"`
	// Embargo status
	IsEmbargoed bool `json:"is_embargoed"`
}
