package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticlePrivateLinkUpdatePathParams struct {
	ArticleID int64  `pathParam:"style=simple,explode=false,name=article_id"`
	LinkID    string `pathParam:"style=simple,explode=false,name=link_id"`
}

type PrivateArticlePrivateLinkUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticlePrivateLinkUpdateRequest struct {
	PathParams PrivateArticlePrivateLinkUpdatePathParams
	Request    *shared.PrivateLinkCreator `request:"mediaType=application/json"`
	Security   PrivateArticlePrivateLinkUpdateSecurity
}

type PrivateArticlePrivateLinkUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
