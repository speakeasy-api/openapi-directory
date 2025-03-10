// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ResourceStatusEnum - Status of the resource. Resources with status live or beta are callable.
type ResourceStatusEnum string

const (
	ResourceStatusEnumLive        ResourceStatusEnum = "live"
	ResourceStatusEnumBeta        ResourceStatusEnum = "beta"
	ResourceStatusEnumDevelopment ResourceStatusEnum = "development"
	ResourceStatusEnumUpcoming    ResourceStatusEnum = "upcoming"
	ResourceStatusEnumConsidering ResourceStatusEnum = "considering"
)

func (e ResourceStatusEnum) ToPointer() *ResourceStatusEnum {
	return &e
}

func (e *ResourceStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "live":
		fallthrough
	case "beta":
		fallthrough
	case "development":
		fallthrough
	case "upcoming":
		fallthrough
	case "considering":
		*e = ResourceStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResourceStatusEnum: %v", v)
	}
}
