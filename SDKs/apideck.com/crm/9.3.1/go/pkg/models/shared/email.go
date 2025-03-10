// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type EmailTypeEnum string

const (
	EmailTypeEnumPrimary   EmailTypeEnum = "primary"
	EmailTypeEnumSecondary EmailTypeEnum = "secondary"
	EmailTypeEnumWork      EmailTypeEnum = "work"
	EmailTypeEnumPersonal  EmailTypeEnum = "personal"
	EmailTypeEnumBilling   EmailTypeEnum = "billing"
	EmailTypeEnumOther     EmailTypeEnum = "other"
)

func (e EmailTypeEnum) ToPointer() *EmailTypeEnum {
	return &e
}

func (e *EmailTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "primary":
		fallthrough
	case "secondary":
		fallthrough
	case "work":
		fallthrough
	case "personal":
		fallthrough
	case "billing":
		fallthrough
	case "other":
		*e = EmailTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for EmailTypeEnum: %v", v)
	}
}

type Email struct {
	Email string         `json:"email"`
	ID    *string        `json:"id,omitempty"`
	Type  *EmailTypeEnum `json:"type,omitempty"`
}
