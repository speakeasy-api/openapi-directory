package operations

import (
	"openapi/pkg/models/shared"
)

type GetSitemapsReportPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetSitemapsReportRequest struct {
	PathParams GetSitemapsReportPathParams
}

type GetSitemapsReportResponse struct {
	ContentType    string
	DefaultPayload *shared.DefaultPayload
	SitemapsReport *shared.SitemapsReport
	StatusCode     int64
}
