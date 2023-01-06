package shared

type AntennaPolEnum string

const (
	AntennaPolEnumH AntennaPolEnum = "h"
	AntennaPolEnumV AntennaPolEnum = "v"
)

type Antenna struct {
	Ant *int32          `json:"ant,omitempty"`
	Azi *int32          `json:"azi,omitempty"`
	Hbw *int32          `json:"hbw,omitempty"`
	Pol *AntennaPolEnum `json:"pol,omitempty"`
	Tlt *float32        `json:"tlt,omitempty"`
	Txg *float32        `json:"txg,omitempty"`
	Txl *float32        `json:"txl,omitempty"`
	Vbw *int32          `json:"vbw,omitempty"`
}
