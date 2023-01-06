package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleEmbargoDeletePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleEmbargoDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleEmbargoDeleteRequest struct {
	PathParams PrivateArticleEmbargoDeletePathParams
	Security   PrivateArticleEmbargoDeleteSecurity
}

type PrivateArticleEmbargoDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
