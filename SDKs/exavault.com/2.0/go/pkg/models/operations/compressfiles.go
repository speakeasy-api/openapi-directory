package operations

import (
	"openapi/pkg/models/shared"
)

type CompressFilesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type CompressFilesCompressFilesRequestBody struct {
	ArchiveName    *string  `json:"archiveName,omitempty"`
	ParentResource *string  `json:"parentResource,omitempty"`
	Resources      []string `json:"resources"`
}

type CompressFilesRequest struct {
	Headers CompressFilesHeaders
	Request *CompressFilesCompressFilesRequestBody `request:"mediaType=application/json"`
}

type CompressFilesResponse struct {
	ContentType      string
	ResourceResponse *shared.ResourceResponse
	StatusCode       int64
}
