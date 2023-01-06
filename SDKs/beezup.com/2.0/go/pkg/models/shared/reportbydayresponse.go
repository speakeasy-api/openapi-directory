package shared

type ReportByDayResponse struct {
	CurrencyCode                *string            `json:"currencyCode,omitempty"`
	Days                        []ReportByDay      `json:"days,omitempty"`
	GlobalPerformanceIndicators *ReportByDayGlobal `json:"globalPerformanceIndicators,omitempty"`
}
