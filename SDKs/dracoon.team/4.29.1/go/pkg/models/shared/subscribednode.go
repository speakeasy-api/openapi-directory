// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// SubscribedNodeTypeEnum - Node type
type SubscribedNodeTypeEnum string

const (
	SubscribedNodeTypeEnumRoom   SubscribedNodeTypeEnum = "room"
	SubscribedNodeTypeEnumFolder SubscribedNodeTypeEnum = "folder"
	SubscribedNodeTypeEnumFile   SubscribedNodeTypeEnum = "file"
)

func (e *SubscribedNodeTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "room":
		fallthrough
	case "folder":
		fallthrough
	case "file":
		*e = SubscribedNodeTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for SubscribedNodeTypeEnum: %s", s)
	}
}

// SubscribedNode - Subscribed node information
type SubscribedNode struct {
	// Auth parent room ID
	AuthParentID *int64 `json:"authParentId,omitempty"`
	// Node ID
	ID int64 `json:"id"`
	// Node type
	Type *SubscribedNodeTypeEnum `json:"type,omitempty"`
}
