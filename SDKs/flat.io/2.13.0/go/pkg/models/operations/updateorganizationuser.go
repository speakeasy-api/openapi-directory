package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOrganizationUserPathParams struct {
	User string `pathParam:"style=simple,explode=false,name=user"`
}

type UpdateOrganizationUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateOrganizationUserRequest struct {
	PathParams UpdateOrganizationUserPathParams
	Request    shared.UserAdminUpdate `request:"mediaType=application/json"`
	Security   UpdateOrganizationUserSecurity
}

type UpdateOrganizationUserResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
	UserDetailsAdmin  *shared.UserDetailsAdmin
}
