package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrawlStatisticsUrlsListTypeEnum string

const (
	GetCrawlStatisticsUrlsListTypeEnumCrawled GetCrawlStatisticsUrlsListTypeEnum = "crawled"
	GetCrawlStatisticsUrlsListTypeEnumErrors  GetCrawlStatisticsUrlsListTypeEnum = "errors"
)

type GetCrawlStatisticsUrlsPathParams struct {
	AnalysisSlug string                             `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ListType     GetCrawlStatisticsUrlsListTypeEnum `pathParam:"style=simple,explode=false,name=list_type"`
	ProjectSlug  string                             `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string                             `pathParam:"style=simple,explode=false,name=username"`
}

type GetCrawlStatisticsUrlsRequest struct {
	PathParams GetCrawlStatisticsUrlsPathParams
}

type GetCrawlStatisticsUrlsResponse struct {
	ContentType                                   string
	DefaultPayload                                *shared.DefaultPayload
	StatusCode                                    int64
	GetCrawlStatisticsUrls200ApplicationJSONAnies []interface{}
}
