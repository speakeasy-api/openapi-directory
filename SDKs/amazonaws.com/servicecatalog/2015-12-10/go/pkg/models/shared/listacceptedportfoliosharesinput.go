package shared

type ListAcceptedPortfolioSharesInput struct {
	AcceptLanguage     map[string]interface{}  `json:"AcceptLanguage,omitempty"`
	PageSize           *int64                  `json:"PageSize,omitempty"`
	PageToken          *string                 `json:"PageToken,omitempty"`
	PortfolioShareType *PortfolioShareTypeEnum `json:"PortfolioShareType,omitempty"`
}
