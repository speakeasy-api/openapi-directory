package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOrganizationUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateOrganizationUserRequest struct {
	Request  *shared.UserCreation `request:"mediaType=application/json"`
	Security CreateOrganizationUserSecurity
}

type CreateOrganizationUserResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
	UserDetailsAdmin  *shared.UserDetailsAdmin
}
