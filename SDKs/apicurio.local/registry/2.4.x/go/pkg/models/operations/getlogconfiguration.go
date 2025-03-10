// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetLogConfigurationRequest struct {
	// The name of a single logger.
	Logger string `pathParam:"style=simple,explode=false,name=logger"`
}

type GetLogConfigurationResponse struct {
	ContentType string
	// Common response for all operations that can fail with an unexpected server error.
	Error *shared.Error
	// The logger configuration for the named logger.
	NamedLogConfiguration *shared.NamedLogConfiguration
	StatusCode            int
	RawResponse           *http.Response
}
