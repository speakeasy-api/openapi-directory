// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type SystemTemplateFilterNameEnum string

const (
	SystemTemplateFilterNameEnumFlowTemplateID SystemTemplateFilterNameEnum = "FLOW_TEMPLATE_ID"
)

func (e SystemTemplateFilterNameEnum) ToPointer() *SystemTemplateFilterNameEnum {
	return &e
}

func (e *SystemTemplateFilterNameEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "FLOW_TEMPLATE_ID":
		*e = SystemTemplateFilterNameEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SystemTemplateFilterNameEnum: %v", v)
	}
}
