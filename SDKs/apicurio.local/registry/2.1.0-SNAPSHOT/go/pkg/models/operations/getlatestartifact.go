package operations

import (
	"openapi/pkg/models/shared"
)

type GetLatestArtifactPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GetLatestArtifactRequest struct {
	PathParams GetLatestArtifactPathParams
}

type GetLatestArtifactResponse struct {
	ContentType string
	Error       *shared.Error
	FileContent []byte
	StatusCode  int64
}
