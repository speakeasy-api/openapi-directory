package shared

type ReportByChannel struct {
	CatalogProductCount  int64                        `json:"catalogProductCount"`
	Channel              BeezUpCommonChannelBasicInfo `json:"channel"`
	ClickCount           int64                        `json:"clickCount"`
	Cost                 float64                      `json:"cost"`
	EnabledProductCount  int64                        `json:"enabledProductCount"`
	Links                ReportByChannelLinks         `json:"links"`
	Margin               *float64                     `json:"margin,omitempty"`
	OrderCount           int64                        `json:"orderCount"`
	PerformanceIndicator float64                      `json:"performanceIndicator"`
	Roi                  *float64                     `json:"roi,omitempty"`
	SoldProductCount     int64                        `json:"soldProductCount"`
	TotalSales           float64                      `json:"totalSales"`
}
