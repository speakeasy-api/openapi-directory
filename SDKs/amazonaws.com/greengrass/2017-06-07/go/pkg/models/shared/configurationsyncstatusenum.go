// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ConfigurationSyncStatusEnum string

const (
	ConfigurationSyncStatusEnumInSync    ConfigurationSyncStatusEnum = "InSync"
	ConfigurationSyncStatusEnumOutOfSync ConfigurationSyncStatusEnum = "OutOfSync"
)

func (e ConfigurationSyncStatusEnum) ToPointer() *ConfigurationSyncStatusEnum {
	return &e
}

func (e *ConfigurationSyncStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "InSync":
		fallthrough
	case "OutOfSync":
		*e = ConfigurationSyncStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ConfigurationSyncStatusEnum: %v", v)
	}
}
