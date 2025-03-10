// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ResetFpgaImageAttributeNameEnum string

const (
	ResetFpgaImageAttributeNameEnumLoadPermission ResetFpgaImageAttributeNameEnum = "loadPermission"
)

func (e ResetFpgaImageAttributeNameEnum) ToPointer() *ResetFpgaImageAttributeNameEnum {
	return &e
}

func (e *ResetFpgaImageAttributeNameEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "loadPermission":
		*e = ResetFpgaImageAttributeNameEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResetFpgaImageAttributeNameEnum: %v", v)
	}
}
