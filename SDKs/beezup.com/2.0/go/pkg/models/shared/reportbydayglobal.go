package shared

type ReportByDayGlobal struct {
	AllChannels ReportByDayGlobalAllChannels `json:"allChannels"`
	ByChannels  []ReportByDayGlobalByChannel `json:"byChannels"`
}
