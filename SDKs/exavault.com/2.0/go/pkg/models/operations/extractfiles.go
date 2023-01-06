package operations

import (
	"openapi/pkg/models/shared"
)

type ExtractFilesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ExtractFilesExtractFilesRequestBody struct {
	ParentResource string `json:"parentResource"`
	Resource       string `json:"resource"`
}

type ExtractFilesRequest struct {
	Headers ExtractFilesHeaders
	Request *ExtractFilesExtractFilesRequestBody `request:"mediaType=application/json"`
}

type ExtractFilesResponse struct {
	ContentType                string
	ResourceCollectionResponse *shared.ResourceCollectionResponse
	StatusCode                 int64
}
