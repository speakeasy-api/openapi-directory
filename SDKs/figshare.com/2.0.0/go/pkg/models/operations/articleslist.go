package operations

import (
	"openapi/pkg/models/shared"
)

type ArticlesListOrderEnum string

const (
	ArticlesListOrderEnumPublishedDate ArticlesListOrderEnum = "published_date"
	ArticlesListOrderEnumModifiedDate  ArticlesListOrderEnum = "modified_date"
	ArticlesListOrderEnumViews         ArticlesListOrderEnum = "views"
	ArticlesListOrderEnumShares        ArticlesListOrderEnum = "shares"
	ArticlesListOrderEnumDownloads     ArticlesListOrderEnum = "downloads"
	ArticlesListOrderEnumCites         ArticlesListOrderEnum = "cites"
)

type ArticlesListOrderDirectionEnum string

const (
	ArticlesListOrderDirectionEnumAsc  ArticlesListOrderDirectionEnum = "asc"
	ArticlesListOrderDirectionEnumDesc ArticlesListOrderDirectionEnum = "desc"
)

type ArticlesListQueryParams struct {
	Doi            *string                         `queryParam:"style=form,explode=true,name=doi"`
	Group          *int64                          `queryParam:"style=form,explode=true,name=group"`
	Handle         *string                         `queryParam:"style=form,explode=true,name=handle"`
	Institution    *int64                          `queryParam:"style=form,explode=true,name=institution"`
	ItemType       *int64                          `queryParam:"style=form,explode=true,name=item_type"`
	Limit          *int64                          `queryParam:"style=form,explode=true,name=limit"`
	ModifiedSince  *string                         `queryParam:"style=form,explode=true,name=modified_since"`
	Offset         *int64                          `queryParam:"style=form,explode=true,name=offset"`
	Order          *ArticlesListOrderEnum          `queryParam:"style=form,explode=true,name=order"`
	OrderDirection *ArticlesListOrderDirectionEnum `queryParam:"style=form,explode=true,name=order_direction"`
	Page           *int64                          `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int64                          `queryParam:"style=form,explode=true,name=page_size"`
	PublishedSince *string                         `queryParam:"style=form,explode=true,name=published_since"`
	ResourceDoi    *string                         `queryParam:"style=form,explode=true,name=resource_doi"`
}

type ArticlesListRequest struct {
	QueryParams ArticlesListQueryParams
}

type ArticlesListResponse struct {
	Articles    []shared.Article
	ContentType string
	StatusCode  int64
}
