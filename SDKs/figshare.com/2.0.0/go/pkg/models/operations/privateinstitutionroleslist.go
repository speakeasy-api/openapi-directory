package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionRolesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionRolesListRequest struct {
	Security PrivateInstitutionRolesListSecurity
}

type PrivateInstitutionRolesListResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Roles        []shared.Role
	StatusCode   int64
}
