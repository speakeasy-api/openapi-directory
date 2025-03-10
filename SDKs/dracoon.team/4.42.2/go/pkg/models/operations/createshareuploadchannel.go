// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CreateShareUploadChannelRequest struct {
	CreateShareUploadChannelRequest shared.CreateShareUploadChannelRequest `request:"mediaType=application/json"`
	// Access key
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
}

type CreateShareUploadChannelResponse struct {
	ContentType string
	// Created
	CreateShareUploadChannelResponse *shared.CreateShareUploadChannelResponse
	// Bad Request
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
}
