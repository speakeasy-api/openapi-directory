// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type VehicleWeightUnitEnum string

const (
	VehicleWeightUnitEnumKilograms VehicleWeightUnitEnum = "Kilograms"
	VehicleWeightUnitEnumPounds    VehicleWeightUnitEnum = "Pounds"
)

func (e VehicleWeightUnitEnum) ToPointer() *VehicleWeightUnitEnum {
	return &e
}

func (e *VehicleWeightUnitEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Kilograms":
		fallthrough
	case "Pounds":
		*e = VehicleWeightUnitEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VehicleWeightUnitEnum: %v", v)
	}
}
