package shared

type GetCrawlerMetricsResponse struct {
	CrawlerMetricsList map[string]interface{} `json:"CrawlerMetricsList,omitempty"`
	NextToken          *string                `json:"NextToken,omitempty"`
}
