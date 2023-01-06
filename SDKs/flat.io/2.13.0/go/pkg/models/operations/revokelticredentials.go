package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeLtiCredentialsPathParams struct {
	Credentials string `pathParam:"style=simple,explode=false,name=credentials"`
}

type RevokeLtiCredentialsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type RevokeLtiCredentialsRequest struct {
	PathParams RevokeLtiCredentialsPathParams
	Security   RevokeLtiCredentialsSecurity
}

type RevokeLtiCredentialsResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
