package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourcesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteResourcesDeleteResourcesRequestBody struct {
	Resources []string `json:"resources"`
}

type DeleteResourcesRequest struct {
	Headers DeleteResourcesHeaders
	Request *DeleteResourcesDeleteResourcesRequestBody `request:"mediaType=application/json"`
}

type DeleteResourcesResponse struct {
	ContentType           string
	EmptyResponse         *shared.EmptyResponse
	ResourceMultiResponse *shared.ResourceMultiResponse
	StatusCode            int64
}
