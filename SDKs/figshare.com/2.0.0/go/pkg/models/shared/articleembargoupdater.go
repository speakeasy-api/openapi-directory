package shared

type ArticleEmbargoUpdaterEmbargoTypeEnum string

const (
	ArticleEmbargoUpdaterEmbargoTypeEnumArticle ArticleEmbargoUpdaterEmbargoTypeEnum = "article"
	ArticleEmbargoUpdaterEmbargoTypeEnumFile    ArticleEmbargoUpdaterEmbargoTypeEnum = "file"
)

type ArticleEmbargoUpdater struct {
	EmbargoDate    string                               `json:"embargo_date"`
	EmbargoOptions []map[string]interface{}             `json:"embargo_options,omitempty"`
	EmbargoReason  *string                              `json:"embargo_reason,omitempty"`
	EmbargoTitle   *string                              `json:"embargo_title,omitempty"`
	EmbargoType    ArticleEmbargoUpdaterEmbargoTypeEnum `json:"embargo_type"`
	IsEmbargoed    bool                                 `json:"is_embargoed"`
}
