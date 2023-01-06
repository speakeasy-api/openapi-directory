package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateUserHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateUserUpdateUserRequestBodyRoleEnum string

const (
	UpdateUserUpdateUserRequestBodyRoleEnumUser  UpdateUserUpdateUserRequestBodyRoleEnum = "user"
	UpdateUserUpdateUserRequestBodyRoleEnumAdmin UpdateUserUpdateUserRequestBodyRoleEnum = "admin"
)

type UpdateUserUpdateUserRequestBody struct {
	Email        *string                                  `json:"email,omitempty"`
	Expiration   *string                                  `json:"expiration,omitempty"`
	HomeResource *string                                  `json:"homeResource,omitempty"`
	Locked       *bool                                    `json:"locked,omitempty"`
	Nickname     *string                                  `json:"nickname,omitempty"`
	Onboarding   *bool                                    `json:"onboarding,omitempty"`
	Password     *string                                  `json:"password,omitempty"`
	Permissions  *shared.UserPermissions                  `json:"permissions,omitempty"`
	Role         *UpdateUserUpdateUserRequestBodyRoleEnum `json:"role,omitempty"`
	TimeZone     *string                                  `json:"timeZone,omitempty"`
	Username     *string                                  `json:"username,omitempty"`
}

type UpdateUserRequest struct {
	PathParams UpdateUserPathParams
	Headers    UpdateUserHeaders
	Request    *UpdateUserUpdateUserRequestBody `request:"mediaType=application/json"`
}

type UpdateUserResponse struct {
	ContentType  string
	StatusCode   int64
	UserResponse *shared.UserResponse
}
