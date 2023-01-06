package shared

import (
	"time"
)

type CrawlStatisticsTimePoint struct {
	Count    int64     `json:"count"`
	Datetime time.Time `json:"datetime"`
}
