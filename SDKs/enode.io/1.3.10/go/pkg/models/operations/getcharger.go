package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetChargerPathParams struct {
	ChargerID string `pathParam:"style=simple,explode=false,name=chargerId"`
}

type GetChargerQueryParams struct {
	Field []shared.OnechargersGetParameters0Enum `queryParam:"style=form,explode=true,name=field[]"`
}

type GetChargerSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken2 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetCharger200ApplicationJSONChargeState struct {
	ChargeRate  *float64 `json:"chargeRate,omitempty"`
	IsCharging  *bool    `json:"isCharging,omitempty"`
	IsPluggedIn *bool    `json:"isPluggedIn,omitempty"`
}

// GetCharger200ApplicationJSONInformation
// Descriptive information about the Charger
type GetCharger200ApplicationJSONInformation struct {
	Brand *string `json:"brand,omitempty"`
	ID    *string `json:"id,omitempty"`
	Model *string `json:"model,omitempty"`
	Year  *int64  `json:"year,omitempty"`
}

type GetCharger200ApplicationJSON struct {
	ChargeState *GetCharger200ApplicationJSONChargeState `json:"chargeState,omitempty"`
	ID          *string                                  `json:"id,omitempty"`
	Information *GetCharger200ApplicationJSONInformation `json:"information,omitempty"`
	IsReachable *bool                                    `json:"isReachable,omitempty"`
	LastSeen    *time.Time                               `json:"lastSeen,omitempty"`
}

type GetChargerRequest struct {
	PathParams  GetChargerPathParams
	QueryParams GetChargerQueryParams
	Security    GetChargerSecurity
}

type GetChargerResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetCharger200ApplicationJSONObject *GetCharger200ApplicationJSON
}
