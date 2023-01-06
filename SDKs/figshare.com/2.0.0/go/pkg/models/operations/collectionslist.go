package operations

import (
	"openapi/pkg/models/shared"
)

type CollectionsListOrderEnum string

const (
	CollectionsListOrderEnumPublishedDate CollectionsListOrderEnum = "published_date"
	CollectionsListOrderEnumModifiedDate  CollectionsListOrderEnum = "modified_date"
	CollectionsListOrderEnumViews         CollectionsListOrderEnum = "views"
	CollectionsListOrderEnumShares        CollectionsListOrderEnum = "shares"
	CollectionsListOrderEnumCites         CollectionsListOrderEnum = "cites"
)

type CollectionsListOrderDirectionEnum string

const (
	CollectionsListOrderDirectionEnumAsc  CollectionsListOrderDirectionEnum = "asc"
	CollectionsListOrderDirectionEnumDesc CollectionsListOrderDirectionEnum = "desc"
)

type CollectionsListQueryParams struct {
	Doi            *string                            `queryParam:"style=form,explode=true,name=doi"`
	Group          *int64                             `queryParam:"style=form,explode=true,name=group"`
	Handle         *string                            `queryParam:"style=form,explode=true,name=handle"`
	Institution    *int64                             `queryParam:"style=form,explode=true,name=institution"`
	Limit          *int64                             `queryParam:"style=form,explode=true,name=limit"`
	ModifiedSince  *string                            `queryParam:"style=form,explode=true,name=modified_since"`
	Offset         *int64                             `queryParam:"style=form,explode=true,name=offset"`
	Order          *CollectionsListOrderEnum          `queryParam:"style=form,explode=true,name=order"`
	OrderDirection *CollectionsListOrderDirectionEnum `queryParam:"style=form,explode=true,name=order_direction"`
	Page           *int64                             `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int64                             `queryParam:"style=form,explode=true,name=page_size"`
	PublishedSince *string                            `queryParam:"style=form,explode=true,name=published_since"`
	ResourceDoi    *string                            `queryParam:"style=form,explode=true,name=resource_doi"`
}

type CollectionsListRequest struct {
	QueryParams CollectionsListQueryParams
}

type CollectionsListResponse struct {
	Collections []shared.Collection
	ContentType string
	StatusCode  int64
}
