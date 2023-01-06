package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFileQueryParams struct {
	AllowOverwrite *bool  `queryParam:"style=form,explode=true,name=allowOverwrite"`
	FileSize       int64  `queryParam:"style=form,explode=true,name=fileSize"`
	Path           string `queryParam:"style=form,explode=true,name=path"`
	Resume         *bool  `queryParam:"style=form,explode=true,name=resume"`
}

type UploadFileHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
	OffsetBytes   *int64 `header:"style=simple,explode=false,name=offsetBytes"`
}

type UploadFileRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type UploadFileRequestBody struct {
	File *UploadFileRequestBodyFile `multipartForm:"file"`
}

type UploadFileRequest struct {
	QueryParams UploadFileQueryParams
	Headers     UploadFileHeaders
	Request     *UploadFileRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadFileResponse struct {
	ContentType      string
	ResourceResponse *shared.ResourceResponse
	StatusCode       int64
}
