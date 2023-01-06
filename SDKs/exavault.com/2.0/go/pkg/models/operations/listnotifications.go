package operations

import (
	"openapi/pkg/models/shared"
)

type ListNotificationsActionEnum string

const (
	ListNotificationsActionEnumConnect  ListNotificationsActionEnum = "connect"
	ListNotificationsActionEnumDownload ListNotificationsActionEnum = "download"
	ListNotificationsActionEnumUpload   ListNotificationsActionEnum = "upload"
	ListNotificationsActionEnumDelete   ListNotificationsActionEnum = "delete"
	ListNotificationsActionEnumAll      ListNotificationsActionEnum = "all"
)

type ListNotificationsIncludeEnum string

const (
	ListNotificationsIncludeEnumResource ListNotificationsIncludeEnum = "resource"
	ListNotificationsIncludeEnumShare    ListNotificationsIncludeEnum = "share"
	ListNotificationsIncludeEnumUser     ListNotificationsIncludeEnum = "user"
)

type ListNotificationsTypeEnum string

const (
	ListNotificationsTypeEnumFile         ListNotificationsTypeEnum = "file"
	ListNotificationsTypeEnumFolder       ListNotificationsTypeEnum = "folder"
	ListNotificationsTypeEnumSharedFolder ListNotificationsTypeEnum = "shared_folder"
	ListNotificationsTypeEnumSendReceipt  ListNotificationsTypeEnum = "send_receipt"
	ListNotificationsTypeEnumShareReceipt ListNotificationsTypeEnum = "share_receipt"
	ListNotificationsTypeEnumFileDrop     ListNotificationsTypeEnum = "file_drop"
)

type ListNotificationsQueryParams struct {
	Action  *ListNotificationsActionEnum  `queryParam:"style=form,explode=true,name=action"`
	Include *ListNotificationsIncludeEnum `queryParam:"style=form,explode=true,name=include"`
	Limit   *int32                        `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int32                        `queryParam:"style=form,explode=true,name=offset"`
	Sort    *string                       `queryParam:"style=form,explode=true,name=sort"`
	Type    *ListNotificationsTypeEnum    `queryParam:"style=form,explode=true,name=type"`
}

type ListNotificationsHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ListNotificationsRequest struct {
	QueryParams ListNotificationsQueryParams
	Headers     ListNotificationsHeaders
}

type ListNotificationsResponse struct {
	ContentType                    string
	NotificationCollectionResponse *shared.NotificationCollectionResponse
	StatusCode                     int64
}
