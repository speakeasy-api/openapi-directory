package operations

import (
	"openapi/pkg/models/shared"
)

type AddNotificationHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type AddNotificationAddNotificationRequestBodyActionEnum string

const (
	AddNotificationAddNotificationRequestBodyActionEnumUpload   AddNotificationAddNotificationRequestBodyActionEnum = "upload"
	AddNotificationAddNotificationRequestBodyActionEnumDownload AddNotificationAddNotificationRequestBodyActionEnum = "download"
	AddNotificationAddNotificationRequestBodyActionEnumDelete   AddNotificationAddNotificationRequestBodyActionEnum = "delete"
	AddNotificationAddNotificationRequestBodyActionEnumAll      AddNotificationAddNotificationRequestBodyActionEnum = "all"
)

type AddNotificationAddNotificationRequestBodyTypeEnum string

const (
	AddNotificationAddNotificationRequestBodyTypeEnumFile   AddNotificationAddNotificationRequestBodyTypeEnum = "file"
	AddNotificationAddNotificationRequestBodyTypeEnumFolder AddNotificationAddNotificationRequestBodyTypeEnum = "folder"
)

type AddNotificationAddNotificationRequestBody struct {
	Action     AddNotificationAddNotificationRequestBodyActionEnum `json:"action"`
	Message    *string                                             `json:"message,omitempty"`
	Recipients []string                                            `json:"recipients,omitempty"`
	Resource   string                                              `json:"resource"`
	SendEmail  bool                                                `json:"sendEmail"`
	Type       AddNotificationAddNotificationRequestBodyTypeEnum   `json:"type"`
	Usernames  []string                                            `json:"usernames"`
}

type AddNotificationRequest struct {
	Headers AddNotificationHeaders
	Request *AddNotificationAddNotificationRequestBody `request:"mediaType=application/json"`
}

type AddNotificationResponse struct {
	ContentType          string
	NotificationResponse *shared.NotificationResponse
	StatusCode           int64
}
