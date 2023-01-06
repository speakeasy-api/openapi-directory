package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticlesSearchSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticlesSearchRequest struct {
	Request  shared.PrivateArticleSearch `request:"mediaType=application/json"`
	Security PrivateArticlesSearchSecurity
}

type PrivateArticlesSearchResponse struct {
	Articles     []shared.Article
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
