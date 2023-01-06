package operations

import (
	"openapi/pkg/models/shared"
)

type CareTeamMembersReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CareTeamMembersReadQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient     *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type CareTeamMembersReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CareTeamMembersReadRequest struct {
	PathParams  CareTeamMembersReadPathParams
	QueryParams CareTeamMembersReadQueryParams
	Security    CareTeamMembersReadSecurity
}

type CareTeamMembersReadResponse struct {
	CareTeamMember *shared.CareTeamMember
	ContentType    string
	StatusCode     int64
}
