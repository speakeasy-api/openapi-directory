package shared

type ReportByProduct struct {
	ChannelCount          int64                        `json:"channelCount"`
	ClickCount            int64                        `json:"clickCount"`
	Cost                  float64                      `json:"cost"`
	EnabledOnChannelCount int64                        `json:"enabledOnChannelCount"`
	Links                 ReportByProductLinks         `json:"links"`
	Margin                *float64                     `json:"margin,omitempty"`
	OrderCount            int64                        `json:"orderCount"`
	PerformanceIndicator  float64                      `json:"performanceIndicator"`
	Product               BeezUpCommonProductBasicInfo `json:"product"`
	Roi                   *float64                     `json:"roi,omitempty"`
	SoldProductCount      int64                        `json:"soldProductCount"`
	TotalSales            float64                      `json:"totalSales"`
}
