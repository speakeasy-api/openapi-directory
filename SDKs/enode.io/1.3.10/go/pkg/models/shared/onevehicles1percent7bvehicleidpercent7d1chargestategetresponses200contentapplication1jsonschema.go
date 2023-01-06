package shared

type Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum string

const (
	Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnumUnknown Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum = ""
	Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnumDefault Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum = "DEFAULT"
)

type Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema struct {
	BatteryCapacity     *float64                                                                                                               `json:"batteryCapacity,omitempty"`
	BatteryLevel        *float64                                                                                                               `json:"batteryLevel,omitempty"`
	ChargeLimit         *float64                                                                                                               `json:"chargeLimit,omitempty"`
	ChargeRate          *float64                                                                                                               `json:"chargeRate,omitempty"`
	ChargeTimeRemaining *float64                                                                                                               `json:"chargeTimeRemaining,omitempty"`
	IsCharging          *bool                                                                                                                  `json:"isCharging,omitempty"`
	IsChargingReasons   []Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum `json:"isChargingReasons,omitempty"`
	IsPluggedIn         *bool                                                                                                                  `json:"isPluggedIn,omitempty"`
	Range               *float64                                                                                                               `json:"range,omitempty"`
}
