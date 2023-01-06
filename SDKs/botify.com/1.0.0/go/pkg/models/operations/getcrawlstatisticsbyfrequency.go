package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrawlStatisticsByFrequencyPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetCrawlStatisticsByFrequencyFrequencyEnum string

const (
	GetCrawlStatisticsByFrequencyFrequencyEnumOnemn   GetCrawlStatisticsByFrequencyFrequencyEnum = "1mn"
	GetCrawlStatisticsByFrequencyFrequencyEnumFivemn  GetCrawlStatisticsByFrequencyFrequencyEnum = "5mn"
	GetCrawlStatisticsByFrequencyFrequencyEnumSixtymn GetCrawlStatisticsByFrequencyFrequencyEnum = "60mn"
)

type GetCrawlStatisticsByFrequencyQueryParams struct {
	Frequency GetCrawlStatisticsByFrequencyFrequencyEnum `queryParam:"style=form,explode=true,name=frequency"`
	Limit     *int32                                     `queryParam:"style=form,explode=true,name=limit"`
}

type GetCrawlStatisticsByFrequencyRequest struct {
	PathParams  GetCrawlStatisticsByFrequencyPathParams
	QueryParams GetCrawlStatisticsByFrequencyQueryParams
}

type GetCrawlStatisticsByFrequencyResponse struct {
	ContentType         string
	CrawlStatisticsTime *shared.CrawlStatisticsTime
	DefaultPayload      *shared.DefaultPayload
	StatusCode          int64
}
