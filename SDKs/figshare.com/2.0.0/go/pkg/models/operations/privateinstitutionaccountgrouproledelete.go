package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionAccountGroupRoleDeletePathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=account_id"`
	GroupID   int64 `pathParam:"style=simple,explode=false,name=group_id"`
	RoleID    int64 `pathParam:"style=simple,explode=false,name=role_id"`
}

type PrivateInstitutionAccountGroupRoleDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionAccountGroupRoleDeleteRequest struct {
	PathParams PrivateInstitutionAccountGroupRoleDeletePathParams
	Security   PrivateInstitutionAccountGroupRoleDeleteSecurity
}

type PrivateInstitutionAccountGroupRoleDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
