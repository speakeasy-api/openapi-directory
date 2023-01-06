package operations

import (
	"openapi/pkg/models/shared"
)

type ListOrganizationUsersQueryParams struct {
	Direction             *shared.SortDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Group                 []string                  `queryParam:"style=form,explode=true,name=group"`
	LicenseExpirationDate []string                  `queryParam:"style=form,explode=true,name=licenseExpirationDate"`
	Limit                 *int64                    `queryParam:"style=form,explode=true,name=limit"`
	Next                  *string                   `queryParam:"style=form,explode=true,name=next"`
	NoActiveLicense       *bool                     `queryParam:"style=form,explode=true,name=noActiveLicense"`
	OnlyIds               *bool                     `queryParam:"style=form,explode=true,name=onlyIds"`
	Previous              *string                   `queryParam:"style=form,explode=true,name=previous"`
	Q                     *string                   `queryParam:"style=form,explode=true,name=q"`
	Role                  []shared.RoleEnum         `queryParam:"style=form,explode=true,name=role"`
	Sort                  *string                   `queryParam:"style=form,explode=true,name=sort"`
}

type ListOrganizationUsersSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListOrganizationUsersRequest struct {
	QueryParams ListOrganizationUsersQueryParams
	Security    ListOrganizationUsersSecurity
}

type ListOrganizationUsersResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
	UserDetailsAdmins []shared.UserDetailsAdmin
}
