package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticlesListQueryParams struct {
	Limit    *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type PrivateArticlesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticlesListRequest struct {
	QueryParams PrivateArticlesListQueryParams
	Security    PrivateArticlesListSecurity
}

type PrivateArticlesListResponse struct {
	Articles     []shared.Article
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
