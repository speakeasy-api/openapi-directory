package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinksPercentilesPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetLinksPercentilesRequest struct {
	PathParams GetLinksPercentilesPathParams
}

type GetLinksPercentilesResponse struct {
	ContentType      string
	DefaultPayload   *shared.DefaultPayload
	LinksPercentiles *shared.LinksPercentiles
	StatusCode       int64
}
