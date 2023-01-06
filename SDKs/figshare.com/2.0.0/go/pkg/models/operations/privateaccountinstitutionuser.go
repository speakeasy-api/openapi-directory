package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateAccountInstitutionUserPathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=account_id"`
}

type PrivateAccountInstitutionUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateAccountInstitutionUserRequest struct {
	PathParams PrivateAccountInstitutionUserPathParams
	Security   PrivateAccountInstitutionUserSecurity
}

type PrivateAccountInstitutionUserResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
	User         *shared.User
}
