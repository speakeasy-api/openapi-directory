package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionsListOrderEnum string

const (
	PrivateCollectionsListOrderEnumPublishedDate PrivateCollectionsListOrderEnum = "published_date"
	PrivateCollectionsListOrderEnumModifiedDate  PrivateCollectionsListOrderEnum = "modified_date"
	PrivateCollectionsListOrderEnumViews         PrivateCollectionsListOrderEnum = "views"
	PrivateCollectionsListOrderEnumShares        PrivateCollectionsListOrderEnum = "shares"
	PrivateCollectionsListOrderEnumCites         PrivateCollectionsListOrderEnum = "cites"
)

type PrivateCollectionsListOrderDirectionEnum string

const (
	PrivateCollectionsListOrderDirectionEnumAsc  PrivateCollectionsListOrderDirectionEnum = "asc"
	PrivateCollectionsListOrderDirectionEnumDesc PrivateCollectionsListOrderDirectionEnum = "desc"
)

type PrivateCollectionsListQueryParams struct {
	Limit          *int64                                    `queryParam:"style=form,explode=true,name=limit"`
	Offset         *int64                                    `queryParam:"style=form,explode=true,name=offset"`
	Order          *PrivateCollectionsListOrderEnum          `queryParam:"style=form,explode=true,name=order"`
	OrderDirection *PrivateCollectionsListOrderDirectionEnum `queryParam:"style=form,explode=true,name=order_direction"`
	Page           *int64                                    `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int64                                    `queryParam:"style=form,explode=true,name=page_size"`
}

type PrivateCollectionsListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionsListRequest struct {
	QueryParams PrivateCollectionsListQueryParams
	Security    PrivateCollectionsListSecurity
}

type PrivateCollectionsListResponse struct {
	Collections  []shared.Collection
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
