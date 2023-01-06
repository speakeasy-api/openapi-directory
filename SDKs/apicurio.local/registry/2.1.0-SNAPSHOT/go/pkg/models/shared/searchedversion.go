package shared

import (
	"time"
)

// SearchedVersion
// Models a single artifact from the result set returned when searching for artifacts.
type SearchedVersion struct {
	ContentID   int64             `json:"contentId"`
	CreatedBy   string            `json:"createdBy"`
	CreatedOn   time.Time         `json:"createdOn"`
	Description *string           `json:"description,omitempty"`
	GlobalID    int64             `json:"globalId"`
	Labels      []string          `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Properties  map[string]string `json:"properties,omitempty"`
	State       ArtifactStateEnum `json:"state"`
	Type        ArtifactTypeEnum  `json:"type"`
	Version     string            `json:"version"`
}
