package operations

import (
	"openapi/pkg/models/shared"
)

type SearchArtifactsByContentOrderEnum string

const (
	SearchArtifactsByContentOrderEnumAsc  SearchArtifactsByContentOrderEnum = "asc"
	SearchArtifactsByContentOrderEnumDesc SearchArtifactsByContentOrderEnum = "desc"
)

type SearchArtifactsByContentOrderbyEnum string

const (
	SearchArtifactsByContentOrderbyEnumName      SearchArtifactsByContentOrderbyEnum = "name"
	SearchArtifactsByContentOrderbyEnumCreatedOn SearchArtifactsByContentOrderbyEnum = "createdOn"
)

type SearchArtifactsByContentQueryParams struct {
	ArtifactType *shared.ArtifactTypeEnum             `queryParam:"style=form,explode=true,name=artifactType"`
	Canonical    *bool                                `queryParam:"style=form,explode=true,name=canonical"`
	Limit        *int64                               `queryParam:"style=form,explode=true,name=limit"`
	Offset       *int64                               `queryParam:"style=form,explode=true,name=offset"`
	Order        *SearchArtifactsByContentOrderEnum   `queryParam:"style=form,explode=true,name=order"`
	Orderby      *SearchArtifactsByContentOrderbyEnum `queryParam:"style=form,explode=true,name=orderby"`
}

type SearchArtifactsByContentRequest struct {
	QueryParams SearchArtifactsByContentQueryParams
	Request     []byte `request:"mediaType=*/*"`
}

type SearchArtifactsByContentResponse struct {
	ArtifactSearchResults *shared.ArtifactSearchResults
	ContentType           string
	Error                 *shared.Error
	StatusCode            int64
}
