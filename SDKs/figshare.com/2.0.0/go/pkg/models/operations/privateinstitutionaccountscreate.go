package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionAccountsCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionAccountsCreateRequest struct {
	Request  shared.AccountCreate `request:"mediaType=application/json"`
	Security PrivateInstitutionAccountsCreateSecurity
}

type PrivateInstitutionAccountsCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
