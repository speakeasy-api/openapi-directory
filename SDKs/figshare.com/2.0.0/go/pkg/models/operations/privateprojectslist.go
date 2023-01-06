package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectsListOrderEnum string

const (
	PrivateProjectsListOrderEnumPublishedDate PrivateProjectsListOrderEnum = "published_date"
	PrivateProjectsListOrderEnumModifiedDate  PrivateProjectsListOrderEnum = "modified_date"
	PrivateProjectsListOrderEnumViews         PrivateProjectsListOrderEnum = "views"
)

type PrivateProjectsListOrderDirectionEnum string

const (
	PrivateProjectsListOrderDirectionEnumAsc  PrivateProjectsListOrderDirectionEnum = "asc"
	PrivateProjectsListOrderDirectionEnumDesc PrivateProjectsListOrderDirectionEnum = "desc"
)

type PrivateProjectsListStorageEnum string

const (
	PrivateProjectsListStorageEnumGroup      PrivateProjectsListStorageEnum = "group"
	PrivateProjectsListStorageEnumIndividual PrivateProjectsListStorageEnum = "individual"
)

type PrivateProjectsListQueryParams struct {
	Limit          *int64                                 `queryParam:"style=form,explode=true,name=limit"`
	Offset         *int64                                 `queryParam:"style=form,explode=true,name=offset"`
	Order          *PrivateProjectsListOrderEnum          `queryParam:"style=form,explode=true,name=order"`
	OrderDirection *PrivateProjectsListOrderDirectionEnum `queryParam:"style=form,explode=true,name=order_direction"`
	Page           *int64                                 `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int64                                 `queryParam:"style=form,explode=true,name=page_size"`
	Roles          *string                                `queryParam:"style=form,explode=true,name=roles"`
	Storage        *PrivateProjectsListStorageEnum        `queryParam:"style=form,explode=true,name=storage"`
}

type PrivateProjectsListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectsListRequest struct {
	QueryParams PrivateProjectsListQueryParams
	Security    PrivateProjectsListSecurity
}

type PrivateProjectsListResponse struct {
	ContentType     string
	ErrorMessage    *shared.ErrorMessage
	ProjectPrivates []shared.ProjectPrivate
	StatusCode      int64
}
