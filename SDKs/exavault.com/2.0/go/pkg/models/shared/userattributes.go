package shared

import (
	"time"
)

type UserAttributesRoleEnum string

const (
	UserAttributesRoleEnumUser   UserAttributesRoleEnum = "user"
	UserAttributesRoleEnumAdmin  UserAttributesRoleEnum = "admin"
	UserAttributesRoleEnumMaster UserAttributesRoleEnum = "master"
)

// UserAttributes
// Attributes of the user including expiration, home directory, and permissions.
type UserAttributes struct {
	AccessTimestamp *string                `json:"accessTimestamp,omitempty"`
	AccountName     string                 `json:"accountName"`
	Created         time.Time              `json:"created"`
	Email           *string                `json:"email,omitempty"`
	Expiration      *string                `json:"expiration,omitempty"`
	FirstLogin      *bool                  `json:"firstLogin,omitempty"`
	HomePath        *string                `json:"homePath,omitempty"`
	Locked          *bool                  `json:"locked,omitempty"`
	Modified        time.Time              `json:"modified"`
	Nickname        string                 `json:"nickname"`
	Onboarding      bool                   `json:"onboarding"`
	Permissions     UserPermissions        `json:"permissions"`
	Role            UserAttributesRoleEnum `json:"role"`
	Status          int32                  `json:"status"`
	TimeZone        string                 `json:"timeZone"`
	Username        string                 `json:"username"`
}
