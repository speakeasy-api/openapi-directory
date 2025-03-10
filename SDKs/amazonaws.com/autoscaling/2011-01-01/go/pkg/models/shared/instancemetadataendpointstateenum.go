// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type InstanceMetadataEndpointStateEnum string

const (
	InstanceMetadataEndpointStateEnumDisabled InstanceMetadataEndpointStateEnum = "disabled"
	InstanceMetadataEndpointStateEnumEnabled  InstanceMetadataEndpointStateEnum = "enabled"
)

func (e InstanceMetadataEndpointStateEnum) ToPointer() *InstanceMetadataEndpointStateEnum {
	return &e
}

func (e *InstanceMetadataEndpointStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "disabled":
		fallthrough
	case "enabled":
		*e = InstanceMetadataEndpointStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for InstanceMetadataEndpointStateEnum: %v", v)
	}
}
