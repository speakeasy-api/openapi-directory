package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateAuthorsSearchSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateAuthorsSearchRequest struct {
	Request  *shared.PrivateAuthorsSearch `request:"mediaType=application/json"`
	Security PrivateAuthorsSearchSecurity
}

type PrivateAuthorsSearchResponse struct {
	Authors      []shared.Author
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
