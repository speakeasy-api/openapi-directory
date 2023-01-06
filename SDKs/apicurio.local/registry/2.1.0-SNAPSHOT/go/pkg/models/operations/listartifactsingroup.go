package operations

import (
	"openapi/pkg/models/shared"
)

type ListArtifactsInGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ListArtifactsInGroupQueryParams struct {
	Limit   *int64                `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int64                `queryParam:"style=form,explode=true,name=offset"`
	Order   *shared.SortOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Orderby *shared.SortByEnum    `queryParam:"style=form,explode=true,name=orderby"`
}

type ListArtifactsInGroupRequest struct {
	PathParams  ListArtifactsInGroupPathParams
	QueryParams ListArtifactsInGroupQueryParams
}

type ListArtifactsInGroupResponse struct {
	ArtifactSearchResults *shared.ArtifactSearchResults
	ContentType           string
	Error                 *shared.Error
	StatusCode            int64
}
