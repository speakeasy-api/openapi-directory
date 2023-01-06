package operations

import (
	"openapi/pkg/models/shared"
)

type CopyResourcesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type CopyResourcesCopyResourcesRequestBody struct {
	ParentResource string   `json:"parentResource"`
	Resources      []string `json:"resources"`
}

type CopyResourcesRequest struct {
	Headers CopyResourcesHeaders
	Request *CopyResourcesCopyResourcesRequestBody `request:"mediaType=application/json"`
}

type CopyResourcesResponse struct {
	ContentType           string
	ResourceCopyMove      *shared.ResourceCopyMove
	ResourceMultiResponse *shared.ResourceMultiResponse
	StatusCode            int64
}
