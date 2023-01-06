package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArtifactVersionPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type CreateArtifactVersionHeaders struct {
	XRegistryDescription        *string `header:"style=simple,explode=false,name=X-Registry-Description"`
	XRegistryDescriptionEncoded *string `header:"style=simple,explode=false,name=X-Registry-Description-Encoded"`
	XRegistryName               *string `header:"style=simple,explode=false,name=X-Registry-Name"`
	XRegistryNameEncoded        *string `header:"style=simple,explode=false,name=X-Registry-Name-Encoded"`
	XRegistryVersion            *string `header:"style=simple,explode=false,name=X-Registry-Version"`
}

type CreateArtifactVersionRequest struct {
	PathParams CreateArtifactVersionPathParams
	Headers    CreateArtifactVersionHeaders
	Request    []byte `request:"mediaType=*/*"`
}

type CreateArtifactVersionResponse struct {
	ContentType        string
	Error              *shared.Error
	RuleViolationError *shared.RuleViolationError
	StatusCode         int64
	VersionMetaData    *shared.VersionMetaData
}
