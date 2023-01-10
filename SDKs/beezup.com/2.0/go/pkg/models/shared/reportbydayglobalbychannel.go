package shared

type ReportByDayGlobalByChannel struct {
	Channel              BeezUpCommonChannelBasicInfo `json:"channel"`
	PerformanceIndicator float64                      `json:"performanceIndicator"`
}
