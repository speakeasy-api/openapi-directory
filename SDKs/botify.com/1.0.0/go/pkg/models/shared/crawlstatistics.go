package shared

import (
	"time"
)

type CrawlStatistics struct {
	DepthCurrent           int64     `json:"depth_current"`
	LastUpdDt              time.Time `json:"last_upd_dt"`
	PagesDones             int64     `json:"pages_dones"`
	PagesDones2xx          int64     `json:"pages_dones_2xx"`
	PagesDones3xx          int64     `json:"pages_dones_3xx"`
	PagesDones4xx          int64     `json:"pages_dones_4xx"`
	PagesDones5xx          int64     `json:"pages_dones_5xx"`
	PagesDonesNetworkerror int64     `json:"pages_dones_networkerror"`
	PagesDonesXxx          int64     `json:"pages_dones_xxx"`
	PagesKnown             int64     `json:"pages_known"`
}
