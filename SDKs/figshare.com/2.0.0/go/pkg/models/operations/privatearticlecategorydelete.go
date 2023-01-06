package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleCategoryDeletePathParams struct {
	ArticleID  int64 `pathParam:"style=simple,explode=false,name=article_id"`
	CategoryID int64 `pathParam:"style=simple,explode=false,name=category_id"`
}

type PrivateArticleCategoryDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleCategoryDeleteRequest struct {
	PathParams PrivateArticleCategoryDeletePathParams
	Security   PrivateArticleCategoryDeleteSecurity
}

type PrivateArticleCategoryDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
