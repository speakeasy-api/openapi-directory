package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionAccountGroupRolesCreatePathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=account_id"`
}

type PrivateInstitutionAccountGroupRolesCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionAccountGroupRolesCreateRequest struct {
	PathParams PrivateInstitutionAccountGroupRolesCreatePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PrivateInstitutionAccountGroupRolesCreateSecurity
}

type PrivateInstitutionAccountGroupRolesCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
