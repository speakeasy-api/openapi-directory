package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleAuthorDeletePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	AuthorID  int64 `pathParam:"style=simple,explode=false,name=author_id"`
}

type PrivateArticleAuthorDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleAuthorDeleteRequest struct {
	PathParams PrivateArticleAuthorDeletePathParams
	Security   PrivateArticleAuthorDeleteSecurity
}

type PrivateArticleAuthorDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
