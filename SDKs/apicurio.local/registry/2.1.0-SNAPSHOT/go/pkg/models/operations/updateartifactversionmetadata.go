package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArtifactVersionMetaDataPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type UpdateArtifactVersionMetaDataRequest struct {
	PathParams UpdateArtifactVersionMetaDataPathParams
	Request    shared.EditableMetaData `request:"mediaType=application/json"`
}

type UpdateArtifactVersionMetaDataResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
