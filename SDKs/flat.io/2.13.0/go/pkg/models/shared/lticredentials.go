package shared

import (
	"time"
)

// LtiCredentials
// A couple of LTI 1.x OAuth credentials
type LtiCredentials struct {
	ConsumerKey    *string      `json:"consumerKey,omitempty"`
	ConsumerSecret *string      `json:"consumerSecret,omitempty"`
	CreationDate   *time.Time   `json:"creationDate,omitempty"`
	Creator        *string      `json:"creator,omitempty"`
	ID             *string      `json:"id,omitempty"`
	LastUsage      *time.Time   `json:"lastUsage,omitempty"`
	Lms            *LmsNameEnum `json:"lms,omitempty"`
	Name           *string      `json:"name,omitempty"`
	Organization   *string      `json:"organization,omitempty"`
}
