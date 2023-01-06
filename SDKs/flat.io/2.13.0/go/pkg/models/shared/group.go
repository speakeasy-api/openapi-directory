package shared

import (
	"time"
)

// Group
// A group of users
type Group struct {
	CreationDate *time.Time     `json:"creationDate,omitempty"`
	ID           *string        `json:"id,omitempty"`
	Name         *string        `json:"name,omitempty"`
	Organization *string        `json:"organization,omitempty"`
	ReadOnly     *bool          `json:"readOnly,omitempty"`
	Type         *GroupTypeEnum `json:"type,omitempty"`
	UsersCount   *float64       `json:"usersCount,omitempty"`
}
