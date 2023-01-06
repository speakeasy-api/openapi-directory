package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticlePrivateLinkDeletePathParams struct {
	ArticleID int64  `pathParam:"style=simple,explode=false,name=article_id"`
	LinkID    string `pathParam:"style=simple,explode=false,name=link_id"`
}

type PrivateArticlePrivateLinkDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticlePrivateLinkDeleteRequest struct {
	PathParams PrivateArticlePrivateLinkDeletePathParams
	Security   PrivateArticlePrivateLinkDeleteSecurity
}

type PrivateArticlePrivateLinkDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
