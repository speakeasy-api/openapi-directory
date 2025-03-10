// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ToggleNotificationChannelsRequest struct {
	NotificationChannelActivationRequest shared.NotificationChannelActivationRequest `request:"mediaType=application/json"`
	// Authentication token
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type ToggleNotificationChannelsResponse struct {
	ContentType string
	// Bad Request
	ErrorResponse *shared.ErrorResponse
	// OK
	NotificationChannelList *shared.NotificationChannelList
	StatusCode              int
	RawResponse             *http.Response
}
