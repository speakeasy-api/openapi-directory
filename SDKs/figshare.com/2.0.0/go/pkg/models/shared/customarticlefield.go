package shared

type CustomArticleField struct {
	IsMandatory *bool   `json:"is_mandatory,omitempty"`
	Name        *string `json:"name,omitempty"`
	Value       *string `json:"value,omitempty"`
}
