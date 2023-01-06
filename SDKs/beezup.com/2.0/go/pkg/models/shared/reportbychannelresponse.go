package shared

type ReportByChannelResponse struct {
	Channels         []ReportByChannel            `json:"channels"`
	CurrencyCode     string                       `json:"currencyCode"`
	Links            ReportByCommonResponseLinks  `json:"links"`
	PaginationResult BeezUpCommonPaginationResult `json:"paginationResult"`
}
