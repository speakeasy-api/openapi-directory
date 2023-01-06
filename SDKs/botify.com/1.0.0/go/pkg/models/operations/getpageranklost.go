package operations

import (
	"openapi/pkg/models/shared"
)

type GetPageRankLostPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetPageRankLostRequest struct {
	PathParams GetPageRankLostPathParams
}

type GetPageRankLostResponse struct {
	ContentType    string
	DefaultPayload *shared.DefaultPayload
	PageRankLost   *shared.PageRankLost
	StatusCode     int64
}
