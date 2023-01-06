package shared

import (
	"time"
)

type SSHKeyAttributes struct {
	Created     *time.Time `json:"created,omitempty"`
	Fingerprint *string    `json:"fingerprint,omitempty"`
	LastLogin   *time.Time `json:"lastLogin,omitempty"`
}
