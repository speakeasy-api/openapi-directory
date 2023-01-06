package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateLicensesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateLicensesListRequest struct {
	Security PrivateLicensesListSecurity
}

type PrivateLicensesListResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Licenses     []shared.License
	StatusCode   int64
}
