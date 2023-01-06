package shared

import (
	"time"
)

type Drive struct {
	CreatedAt   *time.Time `json:"created_at,omitempty"`
	CreatedBy   *string    `json:"created_by,omitempty"`
	Description *string    `json:"description,omitempty"`
	ID          string     `json:"id"`
	Name        string     `json:"name"`
	UpdatedAt   *time.Time `json:"updated_at,omitempty"`
	UpdatedBy   *string    `json:"updated_by,omitempty"`
}

type DriveInput struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
}
