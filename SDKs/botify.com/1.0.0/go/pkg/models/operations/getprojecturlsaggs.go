package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectUrlsAggsPathParams struct {
	ProjectSlug string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username    string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectUrlsAggsAreaEnum string

const (
	GetProjectUrlsAggsAreaEnumCurrent     GetProjectUrlsAggsAreaEnum = "current"
	GetProjectUrlsAggsAreaEnumDisappeared GetProjectUrlsAggsAreaEnum = "disappeared"
	GetProjectUrlsAggsAreaEnumNew         GetProjectUrlsAggsAreaEnum = "new"
)

type GetProjectUrlsAggsQueryParams struct {
	Area             *GetProjectUrlsAggsAreaEnum `queryParam:"style=form,explode=true,name=area"`
	LastAnalysisSlug *string                     `queryParam:"style=form,explode=true,name=last_analysis_slug"`
	NbAnalyses       *int32                      `queryParam:"style=form,explode=true,name=nb_analyses"`
}

type GetProjectUrlsAggsRequest struct {
	PathParams  GetProjectUrlsAggsPathParams
	QueryParams GetProjectUrlsAggsQueryParams
	Request     []shared.UrlsAggsQuery `request:"mediaType=application/json"`
}

type GetProjectUrlsAggsResponse struct {
	ContentType    string
	Default        map[string]interface{}
	DefaultPayload *shared.DefaultPayload
	StatusCode     int64
}
