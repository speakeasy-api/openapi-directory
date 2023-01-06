package operations

import (
	"openapi/pkg/models/shared"
)

type ListArtifactVersionsPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ListArtifactVersionsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type ListArtifactVersionsRequest struct {
	PathParams  ListArtifactVersionsPathParams
	QueryParams ListArtifactVersionsQueryParams
}

type ListArtifactVersionsResponse struct {
	ContentType          string
	Error                *shared.Error
	StatusCode           int64
	VersionSearchResults *shared.VersionSearchResults
}
