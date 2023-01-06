package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticlePrivateLinkCreatePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticlePrivateLinkCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticlePrivateLinkCreateRequest struct {
	PathParams PrivateArticlePrivateLinkCreatePathParams
	Request    *shared.PrivateLinkCreator `request:"mediaType=application/json"`
	Security   PrivateArticlePrivateLinkCreateSecurity
}

type PrivateArticlePrivateLinkCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
