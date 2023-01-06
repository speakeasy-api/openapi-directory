package shared

type ArticleEmbargo struct {
	EmbargoDate    *string                  `json:"embargo_date,omitempty"`
	EmbargoOptions []map[string]interface{} `json:"embargo_options,omitempty"`
	EmbargoReason  *string                  `json:"embargo_reason,omitempty"`
	EmbargoTitle   *string                  `json:"embargo_title,omitempty"`
	EmbargoType    *string                  `json:"embargo_type,omitempty"`
	IsEmbargoed    *bool                    `json:"is_embargoed,omitempty"`
}
