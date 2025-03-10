// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CodespaceMachinePrebuildAvailabilityEnum - Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
type CodespaceMachinePrebuildAvailabilityEnum string

const (
	CodespaceMachinePrebuildAvailabilityEnumNone       CodespaceMachinePrebuildAvailabilityEnum = "none"
	CodespaceMachinePrebuildAvailabilityEnumReady      CodespaceMachinePrebuildAvailabilityEnum = "ready"
	CodespaceMachinePrebuildAvailabilityEnumInProgress CodespaceMachinePrebuildAvailabilityEnum = "in_progress"
)

func (e CodespaceMachinePrebuildAvailabilityEnum) ToPointer() *CodespaceMachinePrebuildAvailabilityEnum {
	return &e
}

func (e *CodespaceMachinePrebuildAvailabilityEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "none":
		fallthrough
	case "ready":
		fallthrough
	case "in_progress":
		*e = CodespaceMachinePrebuildAvailabilityEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CodespaceMachinePrebuildAvailabilityEnum: %v", v)
	}
}

// CodespaceMachine - A description of the machine powering a codespace.
type CodespaceMachine struct {
	// How many cores are available to the codespace.
	Cpus int64 `json:"cpus"`
	// The display name of the machine includes cores, memory, and storage.
	DisplayName string `json:"display_name"`
	// How much memory is available to the codespace.
	MemoryInBytes int64 `json:"memory_in_bytes"`
	// The name of the machine.
	Name string `json:"name"`
	// The operating system of the machine.
	OperatingSystem string `json:"operating_system"`
	// Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
	PrebuildAvailability CodespaceMachinePrebuildAvailabilityEnum `json:"prebuild_availability"`
	// How much storage is available to the codespace.
	StorageInBytes int64 `json:"storage_in_bytes"`
}
