package shared

import (
	"time"
)

// ScoreTrack
// An audio track for a score
type ScoreTrack struct {
	CreationDate          *time.Time           `json:"creationDate,omitempty"`
	Creator               *string              `json:"creator,omitempty"`
	Default               *bool                `json:"default,omitempty"`
	ID                    *string              `json:"id,omitempty"`
	MediaID               *string              `json:"mediaId,omitempty"`
	ModificationDate      *time.Time           `json:"modificationDate,omitempty"`
	Score                 *string              `json:"score,omitempty"`
	State                 *ScoreTrackStateEnum `json:"state,omitempty"`
	SynchronizationPoints []ScoreTrackPoint    `json:"synchronizationPoints,omitempty"`
	Title                 *string              `json:"title,omitempty"`
	Type                  *ScoreTrackTypeEnum  `json:"type,omitempty"`
	URL                   *string              `json:"url,omitempty"`
}
