package operations

import (
	"openapi/pkg/models/shared"
)

type CustomDemographicsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type CustomDemographicsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// CustomDemographicsList200ApplicationJSON
// Paginated Result
type CustomDemographicsList200ApplicationJSON struct {
	Data     []shared.CustomPatientFieldType `json:"data,omitempty"`
	Next     *string                         `json:"next,omitempty"`
	Previous *string                         `json:"previous,omitempty"`
}

type CustomDemographicsListRequest struct {
	QueryParams CustomDemographicsListQueryParams
	Security    CustomDemographicsListSecurity
}

type CustomDemographicsListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CustomDemographicsList200ApplicationJSONObject *CustomDemographicsList200ApplicationJSON
}
