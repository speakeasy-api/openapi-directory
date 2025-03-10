// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type DNSResponseTypeEnum string

const (
	DNSResponseTypeEnumLoadbalancer DNSResponseTypeEnum = "LOADBALANCER"
	DNSResponseTypeEnumEndpoints    DNSResponseTypeEnum = "ENDPOINTS"
)

func (e DNSResponseTypeEnum) ToPointer() *DNSResponseTypeEnum {
	return &e
}

func (e *DNSResponseTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "LOADBALANCER":
		fallthrough
	case "ENDPOINTS":
		*e = DNSResponseTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DNSResponseTypeEnum: %v", v)
	}
}
