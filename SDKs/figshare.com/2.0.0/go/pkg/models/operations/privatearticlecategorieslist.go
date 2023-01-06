package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleCategoriesListPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleCategoriesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleCategoriesListRequest struct {
	PathParams PrivateArticleCategoriesListPathParams
	Security   PrivateArticleCategoriesListSecurity
}

type PrivateArticleCategoriesListResponse struct {
	Categories   []shared.Category
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
