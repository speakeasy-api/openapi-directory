package shared

import (
	"time"
)

type ReportByDay struct {
	AllChannels ReportByDayAllChannels `json:"allChannels"`
	ByChannels  []ReportByDayByChannel `json:"byChannels"`
	Day         time.Time              `json:"day"`
}
