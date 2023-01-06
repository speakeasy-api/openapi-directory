package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArtifactMetaDataPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type UpdateArtifactMetaDataRequest struct {
	PathParams UpdateArtifactMetaDataPathParams
	Request    shared.EditableMetaData `request:"mediaType=application/json"`
}

type UpdateArtifactMetaDataResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
