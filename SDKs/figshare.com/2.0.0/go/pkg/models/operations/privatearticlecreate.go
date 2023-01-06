package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleCreateRequest struct {
	Request  shared.ArticleCreate `request:"mediaType=application/json"`
	Security PrivateArticleCreateSecurity
}

type PrivateArticleCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Location     *shared.Location
	StatusCode   int64
}
