package operations

import (
	"openapi/pkg/models/shared"
)

type FeeSchedulesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FeeSchedulesReadQueryParams struct {
	Code     *string `queryParam:"style=form,explode=true,name=code"`
	CodeType *string `queryParam:"style=form,explode=true,name=code_type"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PayerID  *string `queryParam:"style=form,explode=true,name=payer_id"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type FeeSchedulesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type FeeSchedulesReadRequest struct {
	PathParams  FeeSchedulesReadPathParams
	QueryParams FeeSchedulesReadQueryParams
	Security    FeeSchedulesReadSecurity
}

type FeeSchedulesReadResponse struct {
	ContentType       string
	DoctorFeeSchedule *shared.DoctorFeeSchedule
	StatusCode        int64
}
