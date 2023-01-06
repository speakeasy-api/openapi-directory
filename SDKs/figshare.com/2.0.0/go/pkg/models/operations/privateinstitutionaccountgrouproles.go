package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionAccountGroupRolesPathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=account_id"`
}

type PrivateInstitutionAccountGroupRolesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionAccountGroupRolesRequest struct {
	PathParams PrivateInstitutionAccountGroupRolesPathParams
	Security   PrivateInstitutionAccountGroupRolesSecurity
}

type PrivateInstitutionAccountGroupRolesResponse struct {
	AccountGroupRoles map[string]interface{}
	ContentType       string
	ErrorMessage      *shared.ErrorMessage
	StatusCode        int64
}
