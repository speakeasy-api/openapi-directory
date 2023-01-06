package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionAccountsSearchSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionAccountsSearchRequest struct {
	Request  shared.InstitutionAccountsSearch `request:"mediaType=application/json"`
	Security PrivateInstitutionAccountsSearchSecurity
}

type PrivateInstitutionAccountsSearchResponse struct {
	ContentType   string
	ErrorMessage  *shared.ErrorMessage
	ShortAccounts []shared.ShortAccount
	StatusCode    int64
}
