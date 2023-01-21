package shared

type LinkParameter3 struct {
	Description *string                `json:"description,omitempty"`
	In          ParameterInEnum        `json:"in"`
	Label       *string                `json:"label,omitempty"`
	LovLink     *LovLink3              `json:"lovLink,omitempty"`
	LovRequired *bool                  `json:"lovRequired,omitempty"`
	Pattern     *string                `json:"pattern,omitempty"`
	Properties  *interface{}           `json:"properties,omitempty"`
	Required    *bool                  `json:"required,omitempty"`
	Schema      *string                `json:"schema,omitempty"`
	Value       map[string]interface{} `json:"value,omitempty"`
}
