package shared

import (
	"time"
)

// UserDetailsAdminLicense
// Current active license of the user
type UserDetailsAdminLicense struct {
	Active         *bool               `json:"active,omitempty"`
	ExpirationDate *time.Time          `json:"expirationDate,omitempty"`
	ID             *string             `json:"id,omitempty"`
	Mode           *LicenseModeEnum    `json:"mode,omitempty"`
	Source         *LicenseSourcesEnum `json:"source,omitempty"`
}

type UserDetailsAdminTypeEnum string

const (
	UserDetailsAdminTypeEnumUser  UserDetailsAdminTypeEnum = "user"
	UserDetailsAdminTypeEnumGuest UserDetailsAdminTypeEnum = "guest"
)

// UserDetailsAdmin
// Public User details summary
type UserDetailsAdmin struct {
	ClassRole        *ClassRolesEnum           `json:"classRole,omitempty"`
	Email            *string                   `json:"email,omitempty"`
	Firstname        *string                   `json:"firstname,omitempty"`
	HTMLURL          *string                   `json:"htmlUrl,omitempty"`
	ID               *string                   `json:"id,omitempty"`
	IsFlatTeam       *bool                     `json:"isFlatTeam,omitempty"`
	IsPowerUser      *bool                     `json:"isPowerUser,omitempty"`
	LastActivityDate *time.Time                `json:"lastActivityDate,omitempty"`
	Lastname         *string                   `json:"lastname,omitempty"`
	License          *UserDetailsAdminLicense  `json:"license,omitempty"`
	Name             *string                   `json:"name,omitempty"`
	Organization     *string                   `json:"organization,omitempty"`
	OrganizationRole *OrganizationRolesEnum    `json:"organizationRole,omitempty"`
	Picture          *string                   `json:"picture,omitempty"`
	PrintableName    *string                   `json:"printableName,omitempty"`
	Type             *UserDetailsAdminTypeEnum `json:"type,omitempty"`
	Username         *string                   `json:"username,omitempty"`
}
