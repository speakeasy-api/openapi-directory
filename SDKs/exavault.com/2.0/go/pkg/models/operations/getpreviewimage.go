package operations

import (
	"openapi/pkg/models/shared"
)

type GetPreviewImageSizeEnum string

const (
	GetPreviewImageSizeEnumSmall  GetPreviewImageSizeEnum = "small"
	GetPreviewImageSizeEnumMedium GetPreviewImageSizeEnum = "medium"
	GetPreviewImageSizeEnumLarge  GetPreviewImageSizeEnum = "large"
)

type GetPreviewImageQueryParams struct {
	Height   *int32                  `queryParam:"style=form,explode=true,name=height"`
	Page     *int32                  `queryParam:"style=form,explode=true,name=page"`
	Resource string                  `queryParam:"style=form,explode=true,name=resource"`
	Size     GetPreviewImageSizeEnum `queryParam:"style=form,explode=true,name=size"`
	Width    *int32                  `queryParam:"style=form,explode=true,name=width"`
}

type GetPreviewImageHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetPreviewImageRequest struct {
	QueryParams GetPreviewImageQueryParams
	Headers     GetPreviewImageHeaders
}

type GetPreviewImageResponse struct {
	ContentType         string
	PreviewFileResponse *shared.PreviewFileResponse
	StatusCode          int64
}
