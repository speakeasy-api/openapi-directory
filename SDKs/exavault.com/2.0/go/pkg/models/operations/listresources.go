package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourcesQueryParams struct {
	Include  *string `queryParam:"style=form,explode=true,name=include"`
	Limit    *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Offset   *int32  `queryParam:"style=form,explode=true,name=offset"`
	Resource string  `queryParam:"style=form,explode=true,name=resource"`
	Sort     *string `queryParam:"style=form,explode=true,name=sort"`
	Type     *string `queryParam:"style=form,explode=true,name=type"`
}

type ListResourcesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ListResourcesRequest struct {
	QueryParams ListResourcesQueryParams
	Headers     ListResourcesHeaders
}

type ListResourcesResponse struct {
	ContentType                string
	ResourceCollectionResponse *shared.ResourceCollectionResponse
	StatusCode                 int64
}
