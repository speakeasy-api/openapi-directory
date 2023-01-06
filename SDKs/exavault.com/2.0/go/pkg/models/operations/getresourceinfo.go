package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceInfoQueryParams struct {
	Include  *string `queryParam:"style=form,explode=true,name=include"`
	Resource string  `queryParam:"style=form,explode=true,name=resource"`
}

type GetResourceInfoHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetResourceInfoRequest struct {
	QueryParams GetResourceInfoQueryParams
	Headers     GetResourceInfoHeaders
}

type GetResourceInfoResponse struct {
	ContentType      string
	ResourceResponse *shared.ResourceResponse
	StatusCode       int64
}
