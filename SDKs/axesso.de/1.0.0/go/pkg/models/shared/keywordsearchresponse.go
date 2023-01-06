package shared

type KeywordSearchResponse struct {
	DomainCode       *string  `json:"domainCode,omitempty"`
	FoundProducts    []string `json:"foundProducts,omitempty"`
	Keyword          *string  `json:"keyword,omitempty"`
	NumberOfProducts *int64   `json:"numberOfProducts,omitempty"`
	ResponseMessage  *string  `json:"responseMessage,omitempty"`
	ResponseStatus   *string  `json:"responseStatus,omitempty"`
	SortStrategy     *string  `json:"sortStrategy,omitempty"`
}
