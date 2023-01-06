package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateAccountSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateAccountRequest struct {
	Security PrivateAccountSecurity
}

type PrivateAccountResponse struct {
	Account      *shared.Account
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
