package shared

// ScoreTrackCreation
// Creation of a new track. This one must contain the URL of the track or the corresponding file
type ScoreTrackCreation struct {
	Default               *bool                `json:"default,omitempty"`
	State                 *ScoreTrackStateEnum `json:"state,omitempty"`
	SynchronizationPoints []ScoreTrackPoint    `json:"synchronizationPoints,omitempty"`
	Title                 *string              `json:"title,omitempty"`
	URL                   *string              `json:"url,omitempty"`
}
