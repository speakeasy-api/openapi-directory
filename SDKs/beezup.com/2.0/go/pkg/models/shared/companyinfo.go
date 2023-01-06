package shared

type CompanyInfo struct {
	AccountingEmails     []string `json:"accountingEmails,omitempty"`
	Address              string   `json:"address"`
	City                 string   `json:"city"`
	Company              string   `json:"company"`
	CountryIsoCodeAlpha3 string   `json:"countryIsoCodeAlpha3"`
	PostalCode           string   `json:"postalCode"`
	VatNumber            *string  `json:"vatNumber,omitempty"`
}
