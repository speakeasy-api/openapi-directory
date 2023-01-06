package operations

import (
	"openapi/pkg/models/shared"
)

type GetUrlsSuggestedFiltersPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUrlsSuggestedFiltersAreaEnum string

const (
	GetUrlsSuggestedFiltersAreaEnumCurrent GetUrlsSuggestedFiltersAreaEnum = "current"
	GetUrlsSuggestedFiltersAreaEnumNew     GetUrlsSuggestedFiltersAreaEnum = "new"
)

type GetUrlsSuggestedFiltersQueryParams struct {
	Area *GetUrlsSuggestedFiltersAreaEnum `queryParam:"style=form,explode=true,name=area"`
}

type GetUrlsSuggestedFiltersRequest struct {
	PathParams  GetUrlsSuggestedFiltersPathParams
	QueryParams GetUrlsSuggestedFiltersQueryParams
	Request     *shared.UrlsAggsQuery `request:"mediaType=application/json"`
}

type GetUrlsSuggestedFiltersResponse struct {
	ContentType    string
	DefaultPayload *shared.DefaultPayload
	StatusCode     int64
	UrlsAggsQuery  *shared.UrlsAggsQuery
}
