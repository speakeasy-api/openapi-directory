package operations

import (
	"openapi/pkg/models/shared"
)

type GetUrlsDatamodelPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUrlsDatamodelAreaEnum string

const (
	GetUrlsDatamodelAreaEnumCurrent              GetUrlsDatamodelAreaEnum = "current"
	GetUrlsDatamodelAreaEnumDisappeared          GetUrlsDatamodelAreaEnum = "disappeared"
	GetUrlsDatamodelAreaEnumNew                  GetUrlsDatamodelAreaEnum = "new"
	GetUrlsDatamodelAreaEnumSearchEnginesOrphans GetUrlsDatamodelAreaEnum = "search_engines_orphans"
)

type GetUrlsDatamodelQueryParams struct {
	Area *GetUrlsDatamodelAreaEnum `queryParam:"style=form,explode=true,name=area"`
}

type GetUrlsDatamodelRequest struct {
	PathParams  GetUrlsDatamodelPathParams
	QueryParams GetUrlsDatamodelQueryParams
}

type GetUrlsDatamodelResponse struct {
	ContentType    string
	CrawlDatamodel *shared.CrawlDatamodel
	DefaultPayload *shared.DefaultPayload
	StatusCode     int64
}
