// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

// RemotestopRequestBody - Remote stop transaction info here.
type RemotestopRequestBody struct {
	Chargestation *string `json:"chargestation,omitempty"`
	Driver        *string `json:"driver,omitempty"`
	Transaction   *string `json:"transaction,omitempty"`
}

type RemotestopResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
