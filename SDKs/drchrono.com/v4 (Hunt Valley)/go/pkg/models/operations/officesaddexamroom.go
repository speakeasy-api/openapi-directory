package operations

import (
	"openapi/pkg/models/shared"
)

type OfficesAddExamRoomPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OfficesAddExamRoomQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type OfficesAddExamRoomSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type OfficesAddExamRoomRequest struct {
	PathParams  OfficesAddExamRoomPathParams
	QueryParams OfficesAddExamRoomQueryParams
	Security    OfficesAddExamRoomSecurity
}

type OfficesAddExamRoomResponse struct {
	ContentType string
	Office      *shared.Office
	StatusCode  int64
}
