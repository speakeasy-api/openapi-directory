package shared

type AssociatePrincipalWithPortfolioInput struct {
	AcceptLanguage *string           `json:"AcceptLanguage,omitempty"`
	PortfolioID    string            `json:"PortfolioId"`
	PrincipalARN   string            `json:"PrincipalARN"`
	PrincipalType  PrincipalTypeEnum `json:"PrincipalType"`
}
