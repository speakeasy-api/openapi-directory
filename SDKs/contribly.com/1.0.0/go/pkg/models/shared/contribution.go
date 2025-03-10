// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// Contribution - Contribution object to be created
type Contribution struct {
	Assignment *Assignment `json:"assignment,omitempty"`
	// The public attribution for this contribution. This will be the display name of the registered user or the contributor's first and last name if they provided them while making a non authenticated contribution. A blank attribution field indicates and anonymous contribution.
	Attribution       *string                 `json:"attribution,omitempty"`
	Body              *string                 `json:"body,omitempty"`
	Created           *time.Time              `json:"created,omitempty"`
	Headline          *string                 `json:"headline,omitempty"`
	ID                *string                 `json:"id,omitempty"`
	MediaUsages       []MediaUsage            `json:"mediaUsages,omitempty"`
	ModerationHistory []ModerationHistoryItem `json:"moderationHistory,omitempty"`
	Place             *Place                  `json:"place,omitempty"`
	URLWords          *string                 `json:"urlWords,omitempty"`
	Via               *Via                    `json:"via,omitempty"`
}
