package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticlePrivateLinkPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticlePrivateLinkSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticlePrivateLinkRequest struct {
	PathParams PrivateArticlePrivateLinkPathParams
	Security   PrivateArticlePrivateLinkSecurity
}

type PrivateArticlePrivateLinkResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	PrivateLinks []shared.PrivateLink
	StatusCode   int64
}
