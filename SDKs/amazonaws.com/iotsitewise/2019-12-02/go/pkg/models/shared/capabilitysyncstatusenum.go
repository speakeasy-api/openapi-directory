// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type CapabilitySyncStatusEnum string

const (
	CapabilitySyncStatusEnumInSync     CapabilitySyncStatusEnum = "IN_SYNC"
	CapabilitySyncStatusEnumOutOfSync  CapabilitySyncStatusEnum = "OUT_OF_SYNC"
	CapabilitySyncStatusEnumSyncFailed CapabilitySyncStatusEnum = "SYNC_FAILED"
	CapabilitySyncStatusEnumUnknown    CapabilitySyncStatusEnum = "UNKNOWN"
)

func (e CapabilitySyncStatusEnum) ToPointer() *CapabilitySyncStatusEnum {
	return &e
}

func (e *CapabilitySyncStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "IN_SYNC":
		fallthrough
	case "OUT_OF_SYNC":
		fallthrough
	case "SYNC_FAILED":
		fallthrough
	case "UNKNOWN":
		*e = CapabilitySyncStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CapabilitySyncStatusEnum: %v", v)
	}
}
