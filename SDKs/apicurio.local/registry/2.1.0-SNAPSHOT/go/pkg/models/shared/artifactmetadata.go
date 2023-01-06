package shared

import (
	"time"
)

type ArtifactMetaData struct {
	ContentID   int64             `json:"contentId"`
	CreatedBy   string            `json:"createdBy"`
	CreatedOn   time.Time         `json:"createdOn"`
	Description *string           `json:"description,omitempty"`
	GlobalID    int64             `json:"globalId"`
	GroupID     *string           `json:"groupId,omitempty"`
	ID          string            `json:"id"`
	Labels      []string          `json:"labels,omitempty"`
	ModifiedBy  string            `json:"modifiedBy"`
	ModifiedOn  time.Time         `json:"modifiedOn"`
	Name        *string           `json:"name,omitempty"`
	Properties  map[string]string `json:"properties,omitempty"`
	State       ArtifactStateEnum `json:"state"`
	Type        ArtifactTypeEnum  `json:"type"`
	Version     string            `json:"version"`
}
