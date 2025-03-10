// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

type GetPsd2RegistrationsIDPsd2registrationLogsRequest struct {
	Expand             *string `queryParam:"style=form,explode=true,name=expand"`
	IDPsd2registration int64   `pathParam:"style=simple,explode=false,name=id_psd2registration"`
	// limit number of results
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	// maximum (inclusive) date
	MaxDate *types.Date `queryParam:"style=form,explode=true,name=max_date"`
	// minimal (inclusive) date
	MinDate *types.Date `queryParam:"style=form,explode=true,name=min_date"`
	// offset of first result
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

// GetPsd2RegistrationsIDPsd2registrationLogs200ApplicationJSON - psd2registrationlogs
type GetPsd2RegistrationsIDPsd2registrationLogs200ApplicationJSON struct {
	Psd2registrationlogs []shared.Psd2RegistrationLog `json:"psd2registrationlogs"`
	// total number of results
	Total *float64 `json:"total,omitempty"`
}

type GetPsd2RegistrationsIDPsd2registrationLogsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// psd2registrationlogs
	GetPsd2RegistrationsIDPsd2registrationLogs200ApplicationJSONObject *GetPsd2RegistrationsIDPsd2registrationLogs200ApplicationJSON
}
