package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLtiCredentialsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateLtiCredentialsRequest struct {
	Request  shared.LtiCredentialsCreation `request:"mediaType=application/json"`
	Security CreateLtiCredentialsSecurity
}

type CreateLtiCredentialsResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	LtiCredentials    *shared.LtiCredentials
	StatusCode        int64
}
