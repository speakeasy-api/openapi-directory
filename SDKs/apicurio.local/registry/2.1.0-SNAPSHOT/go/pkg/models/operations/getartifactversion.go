package operations

import (
	"openapi/pkg/models/shared"
)

type GetArtifactVersionPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type GetArtifactVersionRequest struct {
	PathParams GetArtifactVersionPathParams
}

type GetArtifactVersionResponse struct {
	ContentType string
	Error       *shared.Error
	FileContent []byte
	StatusCode  int64
}
