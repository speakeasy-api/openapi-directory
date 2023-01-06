package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionDetailsRequest struct {
	Security PrivateInstitutionDetailsSecurity
}

type PrivateInstitutionDetailsResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Institution  *shared.Institution
	StatusCode   int64
}
