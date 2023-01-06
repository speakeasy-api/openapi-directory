package operations

import (
	"openapi/pkg/models/shared"
)

type FeeSchedulesListQueryParams struct {
	Code     *string `queryParam:"style=form,explode=true,name=code"`
	CodeType *string `queryParam:"style=form,explode=true,name=code_type"`
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	PayerID  *string `queryParam:"style=form,explode=true,name=payer_id"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type FeeSchedulesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// FeeSchedulesList200ApplicationJSON
// Paginated Result
type FeeSchedulesList200ApplicationJSON struct {
	Data     []shared.DoctorFeeSchedule `json:"data,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
}

type FeeSchedulesListRequest struct {
	QueryParams FeeSchedulesListQueryParams
	Security    FeeSchedulesListSecurity
}

type FeeSchedulesListResponse struct {
	ContentType                              string
	StatusCode                               int64
	FeeSchedulesList200ApplicationJSONObject *FeeSchedulesList200ApplicationJSON
}
