package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArtifactPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type CreateArtifactQueryParams struct {
	Canonical *bool                `queryParam:"style=form,explode=true,name=canonical"`
	IfExists  *shared.IfExistsEnum `queryParam:"style=form,explode=true,name=ifExists"`
}

type CreateArtifactHeaders struct {
	XRegistryArtifactID         *string                  `header:"style=simple,explode=false,name=X-Registry-ArtifactId"`
	XRegistryArtifactType       *shared.ArtifactTypeEnum `header:"style=simple,explode=false,name=X-Registry-ArtifactType"`
	XRegistryDescription        *string                  `header:"style=simple,explode=false,name=X-Registry-Description"`
	XRegistryDescriptionEncoded *string                  `header:"style=simple,explode=false,name=X-Registry-Description-Encoded"`
	XRegistryName               *string                  `header:"style=simple,explode=false,name=X-Registry-Name"`
	XRegistryNameEncoded        *string                  `header:"style=simple,explode=false,name=X-Registry-Name-Encoded"`
	XRegistryVersion            *string                  `header:"style=simple,explode=false,name=X-Registry-Version"`
}

type CreateArtifactRequest struct {
	PathParams  CreateArtifactPathParams
	QueryParams CreateArtifactQueryParams
	Headers     CreateArtifactHeaders
	Request     []byte `request:"mediaType=*/*"`
}

type CreateArtifactResponse struct {
	ArtifactMetaData   *shared.ArtifactMetaData
	ContentType        string
	Error              *shared.Error
	RuleViolationError *shared.RuleViolationError
	StatusCode         int64
}
