// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type HECEndpointTypeEnum string

const (
	HECEndpointTypeEnumRaw   HECEndpointTypeEnum = "Raw"
	HECEndpointTypeEnumEvent HECEndpointTypeEnum = "Event"
)

func (e HECEndpointTypeEnum) ToPointer() *HECEndpointTypeEnum {
	return &e
}

func (e *HECEndpointTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Raw":
		fallthrough
	case "Event":
		*e = HECEndpointTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for HECEndpointTypeEnum: %v", v)
	}
}
