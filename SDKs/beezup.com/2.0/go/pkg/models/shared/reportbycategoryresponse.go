package shared

type ReportByCategoryResponse struct {
	Categories       []ReportByCategory            `json:"categories,omitempty"`
	CurrencyCode     *string                       `json:"currencyCode,omitempty"`
	Links            *ReportByCommonResponseLinks  `json:"links,omitempty"`
	PaginationResult *BeezUpCommonPaginationResult `json:"paginationResult,omitempty"`
}
