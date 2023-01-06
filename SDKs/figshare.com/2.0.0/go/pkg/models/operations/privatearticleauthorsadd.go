package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleAuthorsAddPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleAuthorsAddSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleAuthorsAddRequest struct {
	PathParams PrivateArticleAuthorsAddPathParams
	Request    shared.AuthorsCreator `request:"mediaType=application/json"`
	Security   PrivateArticleAuthorsAddSecurity
}

type PrivateArticleAuthorsAddResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
