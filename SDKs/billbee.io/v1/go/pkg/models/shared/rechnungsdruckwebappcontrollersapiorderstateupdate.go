// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum - The new state to set
type RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum int

const (
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumOne      RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 1
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumTwo      RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 2
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumThree    RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 3
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumFour     RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 4
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumFive     RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 5
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumSix      RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 6
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumSeven    RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 7
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumEight    RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 8
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumNine     RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 9
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumTen      RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 10
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumEleven   RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 11
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumTwelve   RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 12
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumThirteen RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 13
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumFourteen RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 14
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumFifteen  RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 15
	RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumSixteen  RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum = 16
)

func (e RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum) ToPointer() *RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum {
	return &e
}

func (e *RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum) UnmarshalJSON(data []byte) error {
	var v int
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case 1:
		fallthrough
	case 2:
		fallthrough
	case 3:
		fallthrough
	case 4:
		fallthrough
	case 5:
		fallthrough
	case 6:
		fallthrough
	case 7:
		fallthrough
	case 8:
		fallthrough
	case 9:
		fallthrough
	case 10:
		fallthrough
	case 11:
		fallthrough
	case 12:
		fallthrough
	case 13:
		fallthrough
	case 14:
		fallthrough
	case 15:
		fallthrough
	case 16:
		*e = RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum: %v", v)
	}
}

// RechnungsdruckWebAppControllersAPIOrderStateUpdate - Specifies the parameters used to set the new state of an order
type RechnungsdruckWebAppControllersAPIOrderStateUpdate struct {
	// The new state to set
	NewStateID *RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnum `json:"NewStateId,omitempty" form:"name=NewStateId"`
}
