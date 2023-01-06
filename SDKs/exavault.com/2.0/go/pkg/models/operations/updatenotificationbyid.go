package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNotificationByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateNotificationByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum string

const (
	UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnumUpload   UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum = "upload"
	UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnumDownload UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum = "download"
	UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnumDelete   UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum = "delete"
	UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnumAll      UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum = "all"
)

type UpdateNotificationByIDUpdateNotificationByIDRequestBody struct {
	Action     *UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnum `json:"action,omitempty"`
	Message    *string                                                            `json:"message,omitempty"`
	Recipients []string                                                           `json:"recipients,omitempty"`
	SendEmail  *bool                                                              `json:"sendEmail,omitempty"`
	Usernames  []string                                                           `json:"usernames,omitempty"`
}

type UpdateNotificationByIDRequest struct {
	PathParams UpdateNotificationByIDPathParams
	Headers    UpdateNotificationByIDHeaders
	Request    *UpdateNotificationByIDUpdateNotificationByIDRequestBody `request:"mediaType=application/json"`
}

type UpdateNotificationByIDResponse struct {
	ContentType          string
	NotificationResponse *shared.NotificationResponse
	StatusCode           int64
}
