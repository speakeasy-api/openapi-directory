// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetDatapointsIDRequest struct {
	// The id of the datapoint
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetDatapointsIDResponse struct {
	APICoreDtoDatapointsDatapoint *shared.APICoreDtoDatapointsDatapoint
	ContentType                   string
	StatusCode                    int
	RawResponse                   *http.Response
}
