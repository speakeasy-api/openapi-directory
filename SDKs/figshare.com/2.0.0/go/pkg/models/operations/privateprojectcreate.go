package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectCreateRequest struct {
	Request  shared.ProjectCreate `request:"mediaType=application/json"`
	Security PrivateProjectCreateSecurity
}

type PrivateProjectCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Location     *shared.Location
	StatusCode   int64
}
