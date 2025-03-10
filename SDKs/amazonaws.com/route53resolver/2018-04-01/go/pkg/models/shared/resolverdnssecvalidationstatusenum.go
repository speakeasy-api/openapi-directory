// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ResolverDNSSECValidationStatusEnum string

const (
	ResolverDNSSECValidationStatusEnumEnabling                          ResolverDNSSECValidationStatusEnum = "ENABLING"
	ResolverDNSSECValidationStatusEnumEnabled                           ResolverDNSSECValidationStatusEnum = "ENABLED"
	ResolverDNSSECValidationStatusEnumDisabling                         ResolverDNSSECValidationStatusEnum = "DISABLING"
	ResolverDNSSECValidationStatusEnumDisabled                          ResolverDNSSECValidationStatusEnum = "DISABLED"
	ResolverDNSSECValidationStatusEnumUpdatingToUseLocalResourceSetting ResolverDNSSECValidationStatusEnum = "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING"
	ResolverDNSSECValidationStatusEnumUseLocalResourceSetting           ResolverDNSSECValidationStatusEnum = "USE_LOCAL_RESOURCE_SETTING"
)

func (e ResolverDNSSECValidationStatusEnum) ToPointer() *ResolverDNSSECValidationStatusEnum {
	return &e
}

func (e *ResolverDNSSECValidationStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ENABLING":
		fallthrough
	case "ENABLED":
		fallthrough
	case "DISABLING":
		fallthrough
	case "DISABLED":
		fallthrough
	case "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING":
		fallthrough
	case "USE_LOCAL_RESOURCE_SETTING":
		*e = ResolverDNSSECValidationStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResolverDNSSECValidationStatusEnum: %v", v)
	}
}
