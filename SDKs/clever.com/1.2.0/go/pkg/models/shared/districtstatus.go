// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type DistrictStatusStateEnum string

const (
	DistrictStatusStateEnumRunning DistrictStatusStateEnum = "running"
	DistrictStatusStateEnumPending DistrictStatusStateEnum = "pending"
	DistrictStatusStateEnumError   DistrictStatusStateEnum = "error"
	DistrictStatusStateEnumPaused  DistrictStatusStateEnum = "paused"
)

func (e DistrictStatusStateEnum) ToPointer() *DistrictStatusStateEnum {
	return &e
}

func (e *DistrictStatusStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "running":
		fallthrough
	case "pending":
		fallthrough
	case "error":
		fallthrough
	case "paused":
		*e = DistrictStatusStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DistrictStatusStateEnum: %v", v)
	}
}

type DistrictStatus struct {
	Error        *string                  `json:"error,omitempty"`
	ID           *string                  `json:"id,omitempty"`
	InstantLogin *bool                    `json:"instant_login,omitempty"`
	LastSync     *string                  `json:"last_sync,omitempty"`
	LaunchDate   *string                  `json:"launch_date,omitempty"`
	PauseEnd     *string                  `json:"pause_end,omitempty"`
	PauseStart   *string                  `json:"pause_start,omitempty"`
	SisType      *string                  `json:"sis_type,omitempty"`
	State        *DistrictStatusStateEnum `json:"state,omitempty"`
}
