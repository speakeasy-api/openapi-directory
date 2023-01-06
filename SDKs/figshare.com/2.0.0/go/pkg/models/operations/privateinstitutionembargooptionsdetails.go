package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionEmbargoOptionsDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionEmbargoOptionsDetailsRequest struct {
	Security PrivateInstitutionEmbargoOptionsDetailsSecurity
}

type PrivateInstitutionEmbargoOptionsDetailsResponse struct {
	ContentType         string
	ErrorMessage        *shared.ErrorMessage
	GroupEmbargoOptions []shared.GroupEmbargoOptions
	StatusCode          int64
}
