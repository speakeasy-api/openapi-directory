package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleDeletePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleDeleteRequest struct {
	PathParams PrivateArticleDeletePathParams
	Security   PrivateArticleDeleteSecurity
}

type PrivateArticleDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
