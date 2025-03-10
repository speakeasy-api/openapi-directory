// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeleteGroupsIDRequest struct {
	// Group ID.
	ID int `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteGroupsIDResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
