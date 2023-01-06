package shared

import (
	"time"
)

type Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchema struct {
	ChargeState         *Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema        `json:"chargeState,omitempty"`
	ChargingLocationID  string                                                                                                  `json:"chargingLocationId"`
	ID                  string                                                                                                  `json:"id"`
	Information         *Onevehicles1Percent7BvehicleIDPercent7D1informationGetResponses200ContentApplication1jsonSchema        `json:"information,omitempty"`
	IsReachable         bool                                                                                                    `json:"isReachable"`
	LastSeen            time.Time                                                                                               `json:"lastSeen"`
	Location            *Onevehicles1Percent7BvehicleIDPercent7D1locationGetResponses200ContentApplication1jsonSchema           `json:"location,omitempty"`
	Odometer            *Onevehicles1Percent7BvehicleIDPercent7D1odometerGetResponses200ContentApplication1jsonSchema           `json:"odometer,omitempty"`
	SmartChargingPolicy *Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema `json:"smartChargingPolicy,omitempty"`
}
