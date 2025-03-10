// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// RestoreDeletedNodesRequestResolutionStrategyEnum - Node conflict resolution strategy:
//
// * `autorename`
//
// * `overwrite`
//
// * `fail`
type RestoreDeletedNodesRequestResolutionStrategyEnum string

const (
	RestoreDeletedNodesRequestResolutionStrategyEnumAutorename RestoreDeletedNodesRequestResolutionStrategyEnum = "autorename"
	RestoreDeletedNodesRequestResolutionStrategyEnumOverwrite  RestoreDeletedNodesRequestResolutionStrategyEnum = "overwrite"
	RestoreDeletedNodesRequestResolutionStrategyEnumFail       RestoreDeletedNodesRequestResolutionStrategyEnum = "fail"
)

func (e RestoreDeletedNodesRequestResolutionStrategyEnum) ToPointer() *RestoreDeletedNodesRequestResolutionStrategyEnum {
	return &e
}

func (e *RestoreDeletedNodesRequestResolutionStrategyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "autorename":
		fallthrough
	case "overwrite":
		fallthrough
	case "fail":
		*e = RestoreDeletedNodesRequestResolutionStrategyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RestoreDeletedNodesRequestResolutionStrategyEnum: %v", v)
	}
}

// RestoreDeletedNodesRequest - Request model for restoring deleted nodes
type RestoreDeletedNodesRequest struct {
	// List of deleted node IDs
	DeletedNodeIds []int64 `json:"deletedNodeIds"`
	// Preserve Download Share Links and point them to the new node.
	KeepShareLinks *bool `json:"keepShareLinks,omitempty"`
	// Node parent ID
	//
	// (default: previous parent ID)
	ParentID *int64 `json:"parentId,omitempty"`
	// Node conflict resolution strategy:
	//
	// * `autorename`
	//
	// * `overwrite`
	//
	// * `fail`
	ResolutionStrategy *RestoreDeletedNodesRequestResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}
