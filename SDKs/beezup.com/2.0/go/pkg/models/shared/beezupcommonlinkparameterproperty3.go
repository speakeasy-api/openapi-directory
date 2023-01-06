package shared

type BeezUpCommonLinkParameterProperty3 struct {
	Description *string                        `json:"description,omitempty"`
	Label       *string                        `json:"label,omitempty"`
	LovLink     *BeezUpCommonLovLink3          `json:"lovLink,omitempty"`
	LovRequired *bool                          `json:"lovRequired,omitempty"`
	Required    *bool                          `json:"required,omitempty"`
	Schema      *string                        `json:"schema,omitempty"`
	Type        *BeezUpCommonParameterTypeEnum `json:"type,omitempty"`
	Value       map[string]interface{}         `json:"value,omitempty"`
}
