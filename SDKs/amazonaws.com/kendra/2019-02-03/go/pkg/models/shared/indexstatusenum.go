// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type IndexStatusEnum string

const (
	IndexStatusEnumCreating       IndexStatusEnum = "CREATING"
	IndexStatusEnumActive         IndexStatusEnum = "ACTIVE"
	IndexStatusEnumDeleting       IndexStatusEnum = "DELETING"
	IndexStatusEnumFailed         IndexStatusEnum = "FAILED"
	IndexStatusEnumUpdating       IndexStatusEnum = "UPDATING"
	IndexStatusEnumSystemUpdating IndexStatusEnum = "SYSTEM_UPDATING"
)

func (e IndexStatusEnum) ToPointer() *IndexStatusEnum {
	return &e
}

func (e *IndexStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CREATING":
		fallthrough
	case "ACTIVE":
		fallthrough
	case "DELETING":
		fallthrough
	case "FAILED":
		fallthrough
	case "UPDATING":
		fallthrough
	case "SYSTEM_UPDATING":
		*e = IndexStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for IndexStatusEnum: %v", v)
	}
}
