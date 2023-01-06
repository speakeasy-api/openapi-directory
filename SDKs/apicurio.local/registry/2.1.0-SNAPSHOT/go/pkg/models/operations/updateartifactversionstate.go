package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArtifactVersionStatePathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type UpdateArtifactVersionStateRequest struct {
	PathParams UpdateArtifactVersionStatePathParams
	Request    shared.UpdateState `request:"mediaType=application/json"`
}

type UpdateArtifactVersionStateResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
