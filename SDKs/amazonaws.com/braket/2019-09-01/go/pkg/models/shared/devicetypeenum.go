// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type DeviceTypeEnum string

const (
	DeviceTypeEnumQpu       DeviceTypeEnum = "QPU"
	DeviceTypeEnumSimulator DeviceTypeEnum = "SIMULATOR"
)

func (e DeviceTypeEnum) ToPointer() *DeviceTypeEnum {
	return &e
}

func (e *DeviceTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "QPU":
		fallthrough
	case "SIMULATOR":
		*e = DeviceTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeviceTypeEnum: %v", v)
	}
}
