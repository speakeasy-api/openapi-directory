package operations

import (
	"openapi/pkg/models/shared"
)

type UsersReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UsersReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type UsersReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type UsersReadRequest struct {
	PathParams  UsersReadPathParams
	QueryParams UsersReadQueryParams
	Security    UsersReadSecurity
}

type UsersReadResponse struct {
	ContentType string
	StatusCode  int64
	UserProfile *shared.UserProfile
}
