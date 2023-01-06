package operations

import (
	"openapi/pkg/models/shared"
)

type GetUrlsPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUrlsAreaEnum string

const (
	GetUrlsAreaEnumCurrent              GetUrlsAreaEnum = "current"
	GetUrlsAreaEnumDisappeared          GetUrlsAreaEnum = "disappeared"
	GetUrlsAreaEnumNew                  GetUrlsAreaEnum = "new"
	GetUrlsAreaEnumSearchEnginesOrphans GetUrlsAreaEnum = "search_engines_orphans"
)

type GetUrlsQueryParams struct {
	Area *GetUrlsAreaEnum `queryParam:"style=form,explode=true,name=area"`
	Page *int32           `queryParam:"style=form,explode=true,name=page"`
	Size *int32           `queryParam:"style=form,explode=true,name=size"`
}

type GetUrls200ApplicationJSON struct {
	Count    *int64                   `json:"count,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Page     *int64                   `json:"page,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Results  []map[string]interface{} `json:"results,omitempty"`
	Size     *int64                   `json:"size,omitempty"`
}

type GetUrlsRequest struct {
	PathParams  GetUrlsPathParams
	QueryParams GetUrlsQueryParams
	Request     *shared.UrlsQuery `request:"mediaType=application/json"`
}

type GetUrlsResponse struct {
	ContentType                     string
	DefaultPayload                  *shared.DefaultPayload
	StatusCode                      int64
	GetUrls200ApplicationJSONObject *GetUrls200ApplicationJSON
}
