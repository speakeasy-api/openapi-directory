package shared

type BeezUpCommonLinkParameter3 struct {
	Description *string                                       `json:"description,omitempty"`
	In          *BeezUpCommonParameterInEnum                  `json:"in,omitempty"`
	Label       *string                                       `json:"label,omitempty"`
	LovLink     *BeezUpCommonLovLink3                         `json:"lovLink,omitempty"`
	LovRequired *bool                                         `json:"lovRequired,omitempty"`
	Properties  map[string]BeezUpCommonLinkParameterProperty3 `json:"properties,omitempty"`
	Required    *bool                                         `json:"required,omitempty"`
	Schema      *string                                       `json:"schema,omitempty"`
	Type        *BeezUpCommonParameterTypeEnum                `json:"type,omitempty"`
	Value       map[string]interface{}                        `json:"value,omitempty"`
}
