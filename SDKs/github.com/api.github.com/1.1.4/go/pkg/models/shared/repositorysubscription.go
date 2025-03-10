// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// RepositorySubscription - Repository invitations let you manage who you collaborate with.
type RepositorySubscription struct {
	CreatedAt time.Time `json:"created_at"`
	// Determines if all notifications should be blocked from this repository.
	Ignored       bool   `json:"ignored"`
	Reason        string `json:"reason"`
	RepositoryURL string `json:"repository_url"`
	// Determines if notifications should be received from this repository.
	Subscribed bool   `json:"subscribed"`
	URL        string `json:"url"`
}
