package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetStatisticsChargingResolutionEnum string

const (
	GetStatisticsChargingResolutionEnumHour  GetStatisticsChargingResolutionEnum = "HOUR"
	GetStatisticsChargingResolutionEnumDay   GetStatisticsChargingResolutionEnum = "DAY"
	GetStatisticsChargingResolutionEnumWeek  GetStatisticsChargingResolutionEnum = "WEEK"
	GetStatisticsChargingResolutionEnumMonth GetStatisticsChargingResolutionEnum = "MONTH"
	GetStatisticsChargingResolutionEnumYear  GetStatisticsChargingResolutionEnum = "YEAR"
)

type GetStatisticsChargingQueryParams struct {
	ChargingLocationID *string                              `queryParam:"style=form,explode=true,name=chargingLocationId"`
	EndDate            *time.Time                           `queryParam:"style=form,explode=true,name=endDate"`
	Resolution         *GetStatisticsChargingResolutionEnum `queryParam:"style=form,explode=true,name=resolution"`
	StartDate          time.Time                            `queryParam:"style=form,explode=true,name=startDate"`
	VehicleID          *string                              `queryParam:"style=form,explode=true,name=vehicleId"`
}

type GetStatisticsChargingSecurity struct {
	UserAccessToken shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

// GetStatisticsCharging200ApplicationJSONKw
// Aggregate statistics for charge rate in kW
type GetStatisticsCharging200ApplicationJSONKw struct {
	Max  float64 `json:"max"`
	Mean float64 `json:"mean"`
	Min  float64 `json:"min"`
}

// GetStatisticsCharging200ApplicationJSONPrice
// Aggregate statistics for power price (<CURRENCY> per kWh)
type GetStatisticsCharging200ApplicationJSONPrice struct {
	Max  float64 `json:"max"`
	Mean float64 `json:"mean"`
	Min  float64 `json:"min"`
}

type GetStatisticsCharging200ApplicationJSON struct {
	CostSum float64                                      `json:"costSum"`
	Date    time.Time                                    `json:"date"`
	Kw      GetStatisticsCharging200ApplicationJSONKw    `json:"kw"`
	KwhSum  float64                                      `json:"kwhSum"`
	Price   GetStatisticsCharging200ApplicationJSONPrice `json:"price"`
}

type GetStatisticsChargingRequest struct {
	QueryParams GetStatisticsChargingQueryParams
	Security    GetStatisticsChargingSecurity
}

type GetStatisticsChargingResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetStatisticsCharging200ApplicationJSONObjects []GetStatisticsCharging200ApplicationJSON
}
