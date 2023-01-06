package operations

import (
	"openapi/pkg/models/shared"
)

type PostCharginglocationsRequestBodyInput struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name      *string  `json:"name,omitempty"`
}

type PostCharginglocationsSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type PostCharginglocationsRequest struct {
	Request  *PostCharginglocationsRequestBodyInput `request:"mediaType=application/json"`
	Security PostCharginglocationsSecurity
}

type PostCharginglocationsResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	OnechargingLocationsPostRequestBodyContentApplication1jsonSchema *shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema
}
