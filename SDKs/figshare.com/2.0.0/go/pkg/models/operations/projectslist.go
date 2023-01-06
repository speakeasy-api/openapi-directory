package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsListOrderEnum string

const (
	ProjectsListOrderEnumPublishedDate ProjectsListOrderEnum = "published_date"
	ProjectsListOrderEnumModifiedDate  ProjectsListOrderEnum = "modified_date"
	ProjectsListOrderEnumViews         ProjectsListOrderEnum = "views"
)

type ProjectsListOrderDirectionEnum string

const (
	ProjectsListOrderDirectionEnumAsc  ProjectsListOrderDirectionEnum = "asc"
	ProjectsListOrderDirectionEnumDesc ProjectsListOrderDirectionEnum = "desc"
)

type ProjectsListQueryParams struct {
	Group          *int64                          `queryParam:"style=form,explode=true,name=group"`
	Institution    *int64                          `queryParam:"style=form,explode=true,name=institution"`
	Limit          *int64                          `queryParam:"style=form,explode=true,name=limit"`
	Offset         *int64                          `queryParam:"style=form,explode=true,name=offset"`
	Order          *ProjectsListOrderEnum          `queryParam:"style=form,explode=true,name=order"`
	OrderDirection *ProjectsListOrderDirectionEnum `queryParam:"style=form,explode=true,name=order_direction"`
	Page           *int64                          `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int64                          `queryParam:"style=form,explode=true,name=page_size"`
	PublishedSince *string                         `queryParam:"style=form,explode=true,name=published_since"`
}

type ProjectsListRequest struct {
	QueryParams ProjectsListQueryParams
}

type ProjectsListResponse struct {
	ContentType string
	Projects    []shared.Project
	StatusCode  int64
}
