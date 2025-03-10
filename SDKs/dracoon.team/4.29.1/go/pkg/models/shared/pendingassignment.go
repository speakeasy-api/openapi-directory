// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// PendingAssignmentStateEnum - Acceptance state:
//
// * `ACCEPTED`
//
// * `WAITING`
//
// * `DENIED`
type PendingAssignmentStateEnum string

const (
	PendingAssignmentStateEnumAccepted PendingAssignmentStateEnum = "ACCEPTED"
	PendingAssignmentStateEnumDenied   PendingAssignmentStateEnum = "DENIED"
	PendingAssignmentStateEnumWaiting  PendingAssignmentStateEnum = "WAITING"
)

func (e *PendingAssignmentStateEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "ACCEPTED":
		fallthrough
	case "DENIED":
		fallthrough
	case "WAITING":
		*e = PendingAssignmentStateEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for PendingAssignmentStateEnum: %s", s)
	}
}

// PendingAssignment - Pending assignment information
type PendingAssignment struct {
	// Unique identifier for the group
	GroupID int64 `json:"groupId"`
	// Room ID
	RoomID int64 `json:"roomId"`
	// Room name
	RoomName string `json:"roomName"`
	// Acceptance state:
	//
	// * `ACCEPTED`
	//
	// * `WAITING`
	//
	// * `DENIED`
	State PendingAssignmentStateEnum `json:"state"`
	// Unique identifier for the user
	UserID int64 `json:"userId"`
}
