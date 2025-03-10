// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ActivityGetThreadRequest struct {
	// thread_id parameter
	ThreadID int64 `pathParam:"style=simple,explode=false,name=thread_id"`
}

type ActivityGetThreadResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
	// Response
	Thread *shared.Thread
}
