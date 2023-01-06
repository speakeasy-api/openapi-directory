package operations

import (
	"openapi/pkg/models/shared"
)

type AddFolderHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type AddFolderAddFolderRequestBody struct {
	Name           *string `json:"name,omitempty"`
	ParentResource *string `json:"parentResource,omitempty"`
	Path           *string `json:"path,omitempty"`
}

type AddFolderRequest struct {
	Headers AddFolderHeaders
	Request *AddFolderAddFolderRequestBody `request:"mediaType=application/json"`
}

type AddFolderResponse struct {
	ContentType      string
	ResourceResponse *shared.ResourceResponse
	StatusCode       int64
}
