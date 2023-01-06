package operations

import (
	"openapi/pkg/models/shared"
)

type MoveResourcesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type MoveResourcesMoveResourcesRequestBody struct {
	ParentResource string   `json:"parentResource"`
	Resources      []string `json:"resources"`
}

type MoveResourcesRequest struct {
	Headers MoveResourcesHeaders
	Request *MoveResourcesMoveResourcesRequestBody `request:"mediaType=application/json"`
}

type MoveResourcesResponse struct {
	ContentType           string
	ResourceCopyMove      *shared.ResourceCopyMove
	ResourceMultiResponse *shared.ResourceMultiResponse
	StatusCode            int64
}
