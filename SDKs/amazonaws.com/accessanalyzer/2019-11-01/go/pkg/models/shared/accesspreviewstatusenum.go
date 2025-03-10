// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type AccessPreviewStatusEnum string

const (
	AccessPreviewStatusEnumCompleted AccessPreviewStatusEnum = "COMPLETED"
	AccessPreviewStatusEnumCreating  AccessPreviewStatusEnum = "CREATING"
	AccessPreviewStatusEnumFailed    AccessPreviewStatusEnum = "FAILED"
)

func (e AccessPreviewStatusEnum) ToPointer() *AccessPreviewStatusEnum {
	return &e
}

func (e *AccessPreviewStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "COMPLETED":
		fallthrough
	case "CREATING":
		fallthrough
	case "FAILED":
		*e = AccessPreviewStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AccessPreviewStatusEnum: %v", v)
	}
}
