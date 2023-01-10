package shared

type ReportByDayByChannel struct {
	Channel              BeezUpCommonChannelBasicInfo `json:"channel"`
	ClickCount           int64                        `json:"clickCount"`
	Cost                 float64                      `json:"cost"`
	Margin               float64                      `json:"margin"`
	OrderCount           int64                        `json:"orderCount"`
	PerformanceIndicator float64                      `json:"performanceIndicator"`
	Roi                  float64                      `json:"roi"`
	SoldProductCount     int64                        `json:"soldProductCount"`
	TotalSales           float64                      `json:"totalSales"`
}
