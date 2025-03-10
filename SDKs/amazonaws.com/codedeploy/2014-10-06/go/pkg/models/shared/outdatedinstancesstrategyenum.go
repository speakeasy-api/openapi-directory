// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type OutdatedInstancesStrategyEnum string

const (
	OutdatedInstancesStrategyEnumUpdate OutdatedInstancesStrategyEnum = "UPDATE"
	OutdatedInstancesStrategyEnumIgnore OutdatedInstancesStrategyEnum = "IGNORE"
)

func (e OutdatedInstancesStrategyEnum) ToPointer() *OutdatedInstancesStrategyEnum {
	return &e
}

func (e *OutdatedInstancesStrategyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "UPDATE":
		fallthrough
	case "IGNORE":
		*e = OutdatedInstancesStrategyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for OutdatedInstancesStrategyEnum: %v", v)
	}
}
