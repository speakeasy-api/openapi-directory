// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type RevokeRoomUsersPathParams struct {
	// Room ID
	RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
}

type RevokeRoomUsersHeaders struct {
	// Authentication token
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RevokeRoomUsersRequest struct {
	PathParams RevokeRoomUsersPathParams
	Headers    RevokeRoomUsersHeaders
	Request    shared.RoomUsersDeleteBatchRequest `request:"mediaType=application/json"`
}

type RevokeRoomUsersResponse struct {
	ContentType string
	// Bad Request
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
}
