package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleAuthorsListPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleAuthorsListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleAuthorsListRequest struct {
	PathParams PrivateArticleAuthorsListPathParams
	Security   PrivateArticleAuthorsListSecurity
}

type PrivateArticleAuthorsListResponse struct {
	Authors      []shared.Author
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
