package shared

type PageRankLost struct {
	External   float32 `json:"external"`
	NonCrawled float32 `json:"non_crawled"`
	RobotsTxt  float32 `json:"robots_txt"`
}
