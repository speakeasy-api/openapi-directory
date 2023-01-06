package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArtifactPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type UpdateArtifactHeaders struct {
	XRegistryDescription        *string `header:"style=simple,explode=false,name=X-Registry-Description"`
	XRegistryDescriptionEncoded *string `header:"style=simple,explode=false,name=X-Registry-Description-Encoded"`
	XRegistryName               *string `header:"style=simple,explode=false,name=X-Registry-Name"`
	XRegistryNameEncoded        *string `header:"style=simple,explode=false,name=X-Registry-Name-Encoded"`
	XRegistryVersion            *string `header:"style=simple,explode=false,name=X-Registry-Version"`
}

type UpdateArtifactRequest struct {
	PathParams UpdateArtifactPathParams
	Headers    UpdateArtifactHeaders
	Request    []byte `request:"mediaType=*/*"`
}

type UpdateArtifactResponse struct {
	ArtifactMetaData *shared.ArtifactMetaData
	ContentType      string
	Error            *shared.Error
	StatusCode       int64
}
