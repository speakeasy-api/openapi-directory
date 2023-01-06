package operations

import (
	"openapi/pkg/models/shared"
)

type ListLtiCredentialsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListLtiCredentialsRequest struct {
	Security ListLtiCredentialsSecurity
}

type ListLtiCredentialsResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	LtiCredentials    []shared.LtiCredentials
	StatusCode        int64
}
