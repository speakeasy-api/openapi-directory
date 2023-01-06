package operations

import (
	"openapi/pkg/models/shared"
)

type ListSharesScopeEnum string

const (
	ListSharesScopeEnumAll         ListSharesScopeEnum = "all"
	ListSharesScopeEnumActive      ListSharesScopeEnum = "active"
	ListSharesScopeEnumCurrentUser ListSharesScopeEnum = "currentUser"
)

type ListSharesSortEnum string

const (
	ListSharesSortEnumCreated      ListSharesSortEnum = "created"
	ListSharesSortEnumMinusCreated ListSharesSortEnum = "-created"
)

type ListSharesTypeEnum string

const (
	ListSharesTypeEnumReceive      ListSharesTypeEnum = "receive"
	ListSharesTypeEnumSharedFolder ListSharesTypeEnum = "shared_folder"
	ListSharesTypeEnumSend         ListSharesTypeEnum = "send"
)

type ListSharesQueryParams struct {
	Include   *string              `queryParam:"style=form,explode=true,name=include"`
	Limit     *int64               `queryParam:"style=form,explode=true,name=limit"`
	Message   *string              `queryParam:"style=form,explode=true,name=message"`
	Name      *string              `queryParam:"style=form,explode=true,name=name"`
	Offset    *int64               `queryParam:"style=form,explode=true,name=offset"`
	Recipient *string              `queryParam:"style=form,explode=true,name=recipient"`
	Scope     *ListSharesScopeEnum `queryParam:"style=form,explode=true,name=scope"`
	Search    *string              `queryParam:"style=form,explode=true,name=search"`
	Sort      *ListSharesSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Type      *ListSharesTypeEnum  `queryParam:"style=form,explode=true,name=type"`
	Username  *string              `queryParam:"style=form,explode=true,name=username"`
}

type ListSharesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ListSharesRequest struct {
	QueryParams ListSharesQueryParams
	Headers     ListSharesHeaders
}

type ListSharesResponse struct {
	ContentType             string
	ShareCollectionResponse *shared.ShareCollectionResponse
	StatusCode              int64
}
