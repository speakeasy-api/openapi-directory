package operations

import (
	"openapi/pkg/models/shared"
)

type SearchArtifactsQueryParams struct {
	Description *string               `queryParam:"style=form,explode=true,name=description"`
	Group       *string               `queryParam:"style=form,explode=true,name=group"`
	Labels      []string              `queryParam:"style=form,explode=true,name=labels"`
	Limit       *int64                `queryParam:"style=form,explode=true,name=limit"`
	Name        *string               `queryParam:"style=form,explode=true,name=name"`
	Offset      *int64                `queryParam:"style=form,explode=true,name=offset"`
	Order       *shared.SortOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Orderby     *shared.SortByEnum    `queryParam:"style=form,explode=true,name=orderby"`
	Properties  []string              `queryParam:"style=form,explode=true,name=properties"`
}

type SearchArtifactsRequest struct {
	QueryParams SearchArtifactsQueryParams
}

type SearchArtifactsResponse struct {
	ArtifactSearchResults *shared.ArtifactSearchResults
	ContentType           string
	Error                 *shared.Error
	StatusCode            int64
}
