package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectArticlesListPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectArticlesListQueryParams struct {
	Limit    *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type PrivateProjectArticlesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectArticlesListRequest struct {
	PathParams  PrivateProjectArticlesListPathParams
	QueryParams PrivateProjectArticlesListQueryParams
	Security    PrivateProjectArticlesListSecurity
}

type PrivateProjectArticlesListResponse struct {
	Articles     []shared.Article
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
