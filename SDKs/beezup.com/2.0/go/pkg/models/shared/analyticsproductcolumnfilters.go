package shared

type AnalyticsProductColumnFilters struct {
	AdditionalAnalyticsProductColumnFilters map[string]AnalyticsProductColumnFilter `json:"additionalAnalyticsProductColumnFilters,omitempty"`
	Sku                                     *string                                 `json:"sku,omitempty"`
	Title                                   *string                                 `json:"title,omitempty"`
}
