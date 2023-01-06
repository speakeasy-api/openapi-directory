package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleUpdatePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleUpdateRequest struct {
	PathParams PrivateArticleUpdatePathParams
	Request    shared.ArticleUpdate `request:"mediaType=application/json"`
	Security   PrivateArticleUpdateSecurity
}

type PrivateArticleUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
