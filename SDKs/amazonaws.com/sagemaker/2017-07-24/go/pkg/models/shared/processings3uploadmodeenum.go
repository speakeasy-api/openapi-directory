// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ProcessingS3UploadModeEnum string

const (
	ProcessingS3UploadModeEnumContinuous ProcessingS3UploadModeEnum = "Continuous"
	ProcessingS3UploadModeEnumEndOfJob   ProcessingS3UploadModeEnum = "EndOfJob"
)

func (e ProcessingS3UploadModeEnum) ToPointer() *ProcessingS3UploadModeEnum {
	return &e
}

func (e *ProcessingS3UploadModeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Continuous":
		fallthrough
	case "EndOfJob":
		*e = ProcessingS3UploadModeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ProcessingS3UploadModeEnum: %v", v)
	}
}
