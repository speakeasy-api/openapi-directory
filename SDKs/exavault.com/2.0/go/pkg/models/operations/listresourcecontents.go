package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceContentsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ListResourceContentsQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
	Limit   *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort    *string `queryParam:"style=form,explode=true,name=sort"`
	Type    *string `queryParam:"style=form,explode=true,name=type"`
}

type ListResourceContentsHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ListResourceContentsRequest struct {
	PathParams  ListResourceContentsPathParams
	QueryParams ListResourceContentsQueryParams
	Headers     ListResourceContentsHeaders
}

type ListResourceContentsResponse struct {
	ContentType                string
	ResourceCollectionResponse *shared.ResourceCollectionResponse
	StatusCode                 int64
}
