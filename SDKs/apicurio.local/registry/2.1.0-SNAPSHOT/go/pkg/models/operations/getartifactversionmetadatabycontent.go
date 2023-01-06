package operations

import (
	"openapi/pkg/models/shared"
)

type GetArtifactVersionMetaDataByContentPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GetArtifactVersionMetaDataByContentQueryParams struct {
	Canonical *bool `queryParam:"style=form,explode=true,name=canonical"`
}

type GetArtifactVersionMetaDataByContentRequest struct {
	PathParams  GetArtifactVersionMetaDataByContentPathParams
	QueryParams GetArtifactVersionMetaDataByContentQueryParams
	Request     []byte `request:"mediaType=*/*"`
}

type GetArtifactVersionMetaDataByContentResponse struct {
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
	VersionMetaData *shared.VersionMetaData
}
