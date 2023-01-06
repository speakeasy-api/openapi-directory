package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionCreateRequest struct {
	Request  shared.CollectionCreate `request:"mediaType=application/json"`
	Security PrivateCollectionCreateSecurity
}

type PrivateCollectionCreateResponse struct {
	CollectionComplete *shared.CollectionComplete
	ContentType        string
	ErrorMessage       *shared.ErrorMessage
	StatusCode         int64
}
