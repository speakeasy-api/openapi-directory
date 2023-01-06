package shared

type Link3 struct {
	AllOptionalParamsProvided *bool                     `json:"allOptionalParamsProvided,omitempty"`
	AllRequiredParamsProvided *bool                     `json:"allRequiredParamsProvided,omitempty"`
	Description               *string                   `json:"description,omitempty"`
	DocURL                    *string                   `json:"docUrl,omitempty"`
	Href                      string                    `json:"href"`
	Info                      *InfoSummaries            `json:"info,omitempty"`
	Label                     *string                   `json:"label,omitempty"`
	Method                    *HTTPMethodEnum           `json:"method,omitempty"`
	OperationID               *string                   `json:"operationId,omitempty"`
	Parameters                map[string]LinkParameter3 `json:"parameters,omitempty"`
	Rel                       *string                   `json:"rel,omitempty"`
	URLTemplated              *bool                     `json:"urlTemplated,omitempty"`
}
