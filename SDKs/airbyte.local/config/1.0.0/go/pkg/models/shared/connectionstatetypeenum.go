// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ConnectionStateTypeEnum - Successful operation
type ConnectionStateTypeEnum string

const (
	ConnectionStateTypeEnumGlobal ConnectionStateTypeEnum = "global"
	ConnectionStateTypeEnumStream ConnectionStateTypeEnum = "stream"
	ConnectionStateTypeEnumLegacy ConnectionStateTypeEnum = "legacy"
	ConnectionStateTypeEnumNotSet ConnectionStateTypeEnum = "not_set"
)

func (e ConnectionStateTypeEnum) ToPointer() *ConnectionStateTypeEnum {
	return &e
}

func (e *ConnectionStateTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "global":
		fallthrough
	case "stream":
		fallthrough
	case "legacy":
		fallthrough
	case "not_set":
		*e = ConnectionStateTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ConnectionStateTypeEnum: %v", v)
	}
}
