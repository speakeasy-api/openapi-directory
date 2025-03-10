// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum - Behaviour when new users are added to the group:
//
// * `autoallow`
//
// * `pending`
//
// Only relevant if `adminGroupIds` has items.
type RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum string

const (
	RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumAutoallow RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum = "autoallow"
	RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumPending   RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum = "pending"
)

func (e *RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "autoallow":
		fallthrough
	case "pending":
		*e = RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum: %s", s)
	}
}

// RoomGroupsAddBatchRequestItem - Request item model for granting group to the room
type RoomGroupsAddBatchRequestItem struct {
	// Unique identifier for the group
	ID int64 `json:"id"`
	// Behaviour when new users are added to the group:
	//
	// * `autoallow`
	//
	// * `pending`
	//
	//
	//
	// Only relevant if `adminGroupIds` has items.
	NewGroupMemberAcceptance *RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance,omitempty"`
	// Node permissions
	Permissions NodePermissions `json:"permissions"`
}
