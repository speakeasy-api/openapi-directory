package shared

type LinksGetStoreLink struct {
	AllOptionalParamsProvided *bool                                 `json:"allOptionalParamsProvided,omitempty"`
	AllRequiredParamsProvided *bool                                 `json:"allRequiredParamsProvided,omitempty"`
	Description               *string                               `json:"description,omitempty"`
	DocURL                    *string                               `json:"docUrl,omitempty"`
	Href                      string                                `json:"href"`
	Info                      *BeezUpCommonInfoSummaries            `json:"info,omitempty"`
	Label                     *string                               `json:"label,omitempty"`
	Method                    *BeezUpCommonHTTPMethodEnum           `json:"method,omitempty"`
	OperationID               *string                               `json:"operationId,omitempty"`
	Parameters                map[string]BeezUpCommonLinkParameter3 `json:"parameters,omitempty"`
	URLTemplated              *bool                                 `json:"urlTemplated,omitempty"`
}
