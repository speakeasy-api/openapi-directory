package shared

import (
	"time"
)

// ScoreRevision
// A score revision metadata
type ScoreRevision struct {
	Autosave      *bool                    `json:"autosave,omitempty"`
	Collaborators []string                 `json:"collaborators,omitempty"`
	CreationDate  *time.Time               `json:"creationDate,omitempty"`
	Description   *string                  `json:"description,omitempty"`
	Event         *string                  `json:"event,omitempty"`
	ID            *string                  `json:"id,omitempty"`
	Statistics    *ScoreRevisionStatistics `json:"statistics,omitempty"`
	User          *string                  `json:"user,omitempty"`
}
