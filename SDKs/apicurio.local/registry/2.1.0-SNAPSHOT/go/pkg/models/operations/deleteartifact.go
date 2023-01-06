package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteArtifactPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type DeleteArtifactRequest struct {
	PathParams DeleteArtifactPathParams
}

type DeleteArtifactResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
