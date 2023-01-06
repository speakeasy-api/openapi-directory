package shared

type ReportAdvancedFilters struct {
	GlobalMarginPercent         *int64                      `json:"globalMarginPercent,omitempty"`
	LinkClickToOrderMaxDay      *int64                      `json:"linkClickToOrderMaxDay,omitempty"`
	LinkClickToOrderType        LinkClickToOrderTypeEnum    `json:"linkClickToOrderType"`
	MarginType                  MarginTypeEnum              `json:"marginType"`
	OnlyDirectSales             bool                        `json:"onlyDirectSales"`
	OnlyPaymentValidatedOrders  bool                        `json:"onlyPaymentValidatedOrders"`
	PerformanceIndicatorFormula PerformanceIndicatorFormula `json:"performanceIndicatorFormula"`
}
