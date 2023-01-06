package shared

import (
	"time"
)

type CrawlStatisticsTime struct {
	AvgDelay       []CrawlStatisticsTimePoint `json:"avg_delay"`
	AvgSize        []CrawlStatisticsTimePoint `json:"avg_size"`
	Frequency      string                     `json:"frequency"`
	HTTPCode2xx    []CrawlStatisticsTimePoint `json:"http_code_2xx"`
	HTTPCode3xx    []CrawlStatisticsTimePoint `json:"http_code_3xx"`
	HTTPCode4xx    []CrawlStatisticsTimePoint `json:"http_code_4xx"`
	HTTPCode5xx    []CrawlStatisticsTimePoint `json:"http_code_5xx"`
	HTTPCodeXxx    []CrawlStatisticsTimePoint `json:"http_code_xxx"`
	LastUpdateDate time.Time                  `json:"last_update_date"`
	NewUrls        []CrawlStatisticsTimePoint `json:"new_urls"`
}
