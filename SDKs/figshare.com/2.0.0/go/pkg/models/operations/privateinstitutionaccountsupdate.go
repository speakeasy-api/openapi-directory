package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionAccountsUpdatePathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=account_id"`
}

type PrivateInstitutionAccountsUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionAccountsUpdateRequest struct {
	PathParams PrivateInstitutionAccountsUpdatePathParams
	Request    shared.AccountUpdate `request:"mediaType=application/json"`
	Security   PrivateInstitutionAccountsUpdateSecurity
}

type PrivateInstitutionAccountsUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
