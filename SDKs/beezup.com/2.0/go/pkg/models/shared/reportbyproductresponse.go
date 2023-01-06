package shared

type ReportByProductResponse struct {
	CurrencyCode     string                       `json:"currencyCode"`
	Links            ReportByCommonResponseLinks  `json:"links"`
	PaginationResult BeezUpCommonPaginationResult `json:"paginationResult"`
	Products         []ReportByProduct            `json:"products"`
}
