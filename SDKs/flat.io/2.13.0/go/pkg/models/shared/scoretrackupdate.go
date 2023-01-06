package shared

// ScoreTrackUpdate
// Update an existing track.
type ScoreTrackUpdate struct {
	Default               *bool                `json:"default,omitempty"`
	State                 *ScoreTrackStateEnum `json:"state,omitempty"`
	SynchronizationPoints []ScoreTrackPoint    `json:"synchronizationPoints,omitempty"`
	Title                 *string              `json:"title,omitempty"`
}
