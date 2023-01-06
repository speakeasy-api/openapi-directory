package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrawlStatisticsPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetCrawlStatisticsRequest struct {
	PathParams GetCrawlStatisticsPathParams
}

type GetCrawlStatisticsResponse struct {
	ContentType     string
	CrawlStatistics *shared.CrawlStatistics
	DefaultPayload  *shared.DefaultPayload
	StatusCode      int64
}
