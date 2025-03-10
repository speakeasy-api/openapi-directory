// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type NetworkInterfaceCreationTypeEnum string

const (
	NetworkInterfaceCreationTypeEnumEfa    NetworkInterfaceCreationTypeEnum = "efa"
	NetworkInterfaceCreationTypeEnumBranch NetworkInterfaceCreationTypeEnum = "branch"
	NetworkInterfaceCreationTypeEnumTrunk  NetworkInterfaceCreationTypeEnum = "trunk"
)

func (e NetworkInterfaceCreationTypeEnum) ToPointer() *NetworkInterfaceCreationTypeEnum {
	return &e
}

func (e *NetworkInterfaceCreationTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "efa":
		fallthrough
	case "branch":
		fallthrough
	case "trunk":
		*e = NetworkInterfaceCreationTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for NetworkInterfaceCreationTypeEnum: %v", v)
	}
}
