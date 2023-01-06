package operations

import (
	"openapi/pkg/models/shared"
)

type AddUserHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

// AddUserAddUserRequestBodyPermissions
// An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.
// When creating a user with the `role` **admin**, you should set all of the permissions to `true`
type AddUserAddUserRequestBodyPermissions struct {
	ChangePassword *bool `json:"changePassword,omitempty"`
	Delete         *bool `json:"delete,omitempty"`
	DeleteFormData *bool `json:"deleteFormData,omitempty"`
	Download       *bool `json:"download,omitempty"`
	List           *bool `json:"list,omitempty"`
	Modify         *bool `json:"modify,omitempty"`
	Notification   *bool `json:"notification,omitempty"`
	Share          *bool `json:"share,omitempty"`
	Upload         *bool `json:"upload,omitempty"`
	ViewFormData   *bool `json:"viewFormData,omitempty"`
}

type AddUserAddUserRequestBodyRoleEnum string

const (
	AddUserAddUserRequestBodyRoleEnumUser  AddUserAddUserRequestBodyRoleEnum = "user"
	AddUserAddUserRequestBodyRoleEnumAdmin AddUserAddUserRequestBodyRoleEnum = "admin"
)

type AddUserAddUserRequestBody struct {
	Email        string                               `json:"email"`
	Expiration   *string                              `json:"expiration,omitempty"`
	HomeResource string                               `json:"homeResource"`
	Locked       *bool                                `json:"locked,omitempty"`
	Nickname     *string                              `json:"nickname,omitempty"`
	Onboarding   *bool                                `json:"onboarding,omitempty"`
	Password     string                               `json:"password"`
	Permissions  AddUserAddUserRequestBodyPermissions `json:"permissions"`
	Role         AddUserAddUserRequestBodyRoleEnum    `json:"role"`
	TimeZone     string                               `json:"timeZone"`
	Username     string                               `json:"username"`
	WelcomeEmail *bool                                `json:"welcomeEmail,omitempty"`
}

type AddUserRequest struct {
	Headers AddUserHeaders
	Request *AddUserAddUserRequestBody `request:"mediaType=application/json"`
}

type AddUserResponse struct {
	ContentType  string
	StatusCode   int64
	UserResponse *shared.UserResponse
}
