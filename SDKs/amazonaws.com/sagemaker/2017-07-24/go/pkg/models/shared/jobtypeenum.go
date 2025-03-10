// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type JobTypeEnum string

const (
	JobTypeEnumTraining       JobTypeEnum = "TRAINING"
	JobTypeEnumInference      JobTypeEnum = "INFERENCE"
	JobTypeEnumNotebookKernel JobTypeEnum = "NOTEBOOK_KERNEL"
)

func (e JobTypeEnum) ToPointer() *JobTypeEnum {
	return &e
}

func (e *JobTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "TRAINING":
		fallthrough
	case "INFERENCE":
		fallthrough
	case "NOTEBOOK_KERNEL":
		*e = JobTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for JobTypeEnum: %v", v)
	}
}
