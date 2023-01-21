package shared

type ReportByDayResponse struct {
	CurrencyCode                string            `json:"currencyCode"`
	Days                        []ReportByDay     `json:"days"`
	GlobalPerformanceIndicators ReportByDayGlobal `json:"globalPerformanceIndicators"`
}
