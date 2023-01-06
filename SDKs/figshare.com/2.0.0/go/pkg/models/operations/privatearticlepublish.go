package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticlePublishPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticlePublishSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticlePublishRequest struct {
	PathParams PrivateArticlePublishPathParams
	Security   PrivateArticlePublishSecurity
}

type PrivateArticlePublishResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
