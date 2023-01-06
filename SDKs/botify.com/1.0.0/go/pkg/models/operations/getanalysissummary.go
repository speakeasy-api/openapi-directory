package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnalysisSummaryPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetAnalysisSummaryRequest struct {
	PathParams GetAnalysisSummaryPathParams
}

type GetAnalysisSummaryResponse struct {
	AnalysisDetail *shared.AnalysisDetail
	ContentType    string
	DefaultPayload *shared.DefaultPayload
	StatusCode     int64
}
