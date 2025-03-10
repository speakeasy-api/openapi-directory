// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// DependabotSecret - Set secrets for Dependabot.
type DependabotSecret struct {
	CreatedAt time.Time `json:"created_at"`
	// The name of the secret.
	Name      string    `json:"name"`
	UpdatedAt time.Time `json:"updated_at"`
}
