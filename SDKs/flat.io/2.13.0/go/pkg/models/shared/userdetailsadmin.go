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

// UserDetailsAdmin
// Public User details summary
type UserDetailsAdmin struct {
	Email            *string                  `json:"email,omitempty"`
	LastActivityDate *time.Time               `json:"lastActivityDate,omitempty"`
	License          *UserDetailsAdminLicense `json:"license,omitempty"`
}
