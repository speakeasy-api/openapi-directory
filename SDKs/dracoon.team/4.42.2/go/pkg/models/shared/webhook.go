// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// Webhook - Webhook information
type Webhook struct {
	// Creation date
	CreatedAt time.Time `json:"createdAt"`
	// User information
	CreatedBy *UserInfo `json:"createdBy,omitempty"`
	// List of names of event types
	EventTypeNames []string `json:"eventTypeNames"`
	// Expiration date / time
	ExpireAt time.Time `json:"expireAt"`
	// Last HTTP status code when a webhook is disabled due to delivery failures
	FailStatus *int `json:"failStatus,omitempty"`
	// ID
	ID int64 `json:"id"`
	// Is enabled
	IsEnabled bool `json:"isEnabled"`
	// Name
	Name string `json:"name"`
	// Secret; used for event message signatures
	Secret *string `json:"secret,omitempty"`
	// Modification date
	UpdatedAt time.Time `json:"updatedAt"`
	// User information
	UpdatedBy *UserInfo `json:"updatedBy,omitempty"`
	// URL
	URL string `json:"url"`
}
