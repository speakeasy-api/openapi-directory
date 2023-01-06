package operations

import (
	"openapi/pkg/models/shared"
)

type ListClassesStateEnum string

const (
	ListClassesStateEnumActive   ListClassesStateEnum = "active"
	ListClassesStateEnumInactive ListClassesStateEnum = "inactive"
	ListClassesStateEnumArchived ListClassesStateEnum = "archived"
)

type ListClassesQueryParams struct {
	State *ListClassesStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type ListClassesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListClassesRequest struct {
	QueryParams ListClassesQueryParams
	Security    ListClassesSecurity
}

type ListClassesResponse struct {
	ClassDetails      []shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
