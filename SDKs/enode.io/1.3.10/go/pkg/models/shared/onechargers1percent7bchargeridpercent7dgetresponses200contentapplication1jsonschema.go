package shared

import (
	"time"
)

type Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaChargeState struct {
	ChargeRate  *float64 `json:"chargeRate,omitempty"`
	IsCharging  *bool    `json:"isCharging,omitempty"`
	IsPluggedIn *bool    `json:"isPluggedIn,omitempty"`
}

// Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaInformation
// Descriptive information about the Charger
type Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaInformation struct {
	Brand *string `json:"brand,omitempty"`
	ID    *string `json:"id,omitempty"`
	Model *string `json:"model,omitempty"`
	Year  *int64  `json:"year,omitempty"`
}

type Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchema struct {
	ChargeState *Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaChargeState `json:"chargeState,omitempty"`
	ID          *string                                                                                         `json:"id,omitempty"`
	Information *Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaInformation `json:"information,omitempty"`
	IsReachable *bool                                                                                           `json:"isReachable,omitempty"`
	LastSeen    *time.Time                                                                                      `json:"lastSeen,omitempty"`
}
