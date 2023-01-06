package operations

import (
	"openapi/pkg/models/shared"
)

type GetURLDetailPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	URL          string `pathParam:"style=simple,explode=false,name=url"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetURLDetailQueryParams struct {
	Fields []string `queryParam:"style=form,explode=false,name=fields"`
}

type GetURLDetailRequest struct {
	PathParams  GetURLDetailPathParams
	QueryParams GetURLDetailQueryParams
}

type GetURLDetailResponse struct {
	ContentType    string
	DefaultPayload *shared.DefaultPayload
	StatusCode     int64
	URLDetail      map[string]interface{}
}
