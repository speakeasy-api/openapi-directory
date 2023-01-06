package operations

import (
	"openapi/pkg/models/shared"
)

type GetUrlsAggsPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUrlsAggsAreaEnum string

const (
	GetUrlsAggsAreaEnumCurrent              GetUrlsAggsAreaEnum = "current"
	GetUrlsAggsAreaEnumDisappeared          GetUrlsAggsAreaEnum = "disappeared"
	GetUrlsAggsAreaEnumNew                  GetUrlsAggsAreaEnum = "new"
	GetUrlsAggsAreaEnumSearchEnginesOrphans GetUrlsAggsAreaEnum = "search_engines_orphans"
)

type GetUrlsAggsQueryParams struct {
	Area *GetUrlsAggsAreaEnum `queryParam:"style=form,explode=true,name=area"`
}

type GetUrlsAggsRequest struct {
	PathParams  GetUrlsAggsPathParams
	QueryParams GetUrlsAggsQueryParams
	Request     []shared.UrlsAggsQuery `request:"mediaType=application/json"`
}

type GetUrlsAggsResponse struct {
	ContentType                        string
	DefaultPayload                     *shared.DefaultPayload
	StatusCode                         int64
	GetUrlsAggs200ApplicationJSONAnies []interface{}
}
