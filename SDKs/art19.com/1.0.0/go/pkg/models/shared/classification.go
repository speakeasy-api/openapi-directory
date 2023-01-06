package shared

import (
	"time"
)

type ClassificationAttributesTypeEnum string

const (
	ClassificationAttributesTypeEnumAlternateFeedType ClassificationAttributesTypeEnum = "AlternateFeedType"
	ClassificationAttributesTypeEnumGenre             ClassificationAttributesTypeEnum = "Genre"
	ClassificationAttributesTypeEnumIndustry          ClassificationAttributesTypeEnum = "Industry"
	ClassificationAttributesTypeEnumLanguage          ClassificationAttributesTypeEnum = "Language"
	ClassificationAttributesTypeEnumMediaRating       ClassificationAttributesTypeEnum = "MediaRating"
)

type ClassificationAttributes struct {
	CreatedAt   *time.Time                        `json:"created_at,omitempty"`
	DisplayName *string                           `json:"display_name,omitempty"`
	Metadata    map[string]interface{}            `json:"metadata,omitempty"`
	ParentID    *string                           `json:"parent_id,omitempty"`
	TreePath    []string                          `json:"tree_path,omitempty"`
	Type        *ClassificationAttributesTypeEnum `json:"type,omitempty"`
	UpdatedAt   *time.Time                        `json:"updated_at,omitempty"`
	Value       *string                           `json:"value,omitempty"`
	ValuePath   *string                           `json:"value_path,omitempty"`
}

// Classification
// A classification, in general, is something that can describe other resources, such as countries, genres or
// languages. How they're described (included or excluded, and whether they're the primary classification
// of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
// and could have an effect only on directory information, or may have an effect on ad decisioning.
type Classification struct {
	Attributes *ClassificationAttributes `json:"attributes,omitempty"`
	ID         *string                   `json:"id,omitempty"`
	Type       *string                   `json:"type,omitempty"`
}
