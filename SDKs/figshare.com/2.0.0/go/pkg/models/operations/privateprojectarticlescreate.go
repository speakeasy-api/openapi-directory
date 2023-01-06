package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectArticlesCreatePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectArticlesCreateQueryParams struct {
	Limit    *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type PrivateProjectArticlesCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectArticlesCreateRequest struct {
	PathParams  PrivateProjectArticlesCreatePathParams
	QueryParams PrivateProjectArticlesCreateQueryParams
	Request     shared.ArticleProjectCreate `request:"mediaType=application/json"`
	Security    PrivateProjectArticlesCreateSecurity
}

type PrivateProjectArticlesCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
