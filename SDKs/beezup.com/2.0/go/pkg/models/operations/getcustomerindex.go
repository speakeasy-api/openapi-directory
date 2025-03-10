// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetCustomerIndexRequest struct {
	// ETag value to identify the last known version of requested resource.\
	// To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\
	// If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\
	// For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3
	//
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetCustomerIndexResponse struct {
	// Occurs when something goes wrong
	BeezUPCommonErrorResponseMessage *shared.BeezUPCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int
	RawResponse                      *http.Response
	// OK
	CustomerIndex *shared.CustomerIndex
}
