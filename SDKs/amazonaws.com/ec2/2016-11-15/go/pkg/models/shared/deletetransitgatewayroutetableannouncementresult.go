// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

// DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum - The direction for the route table announcement.
type DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum string

const (
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnumOutgoing DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum = "outgoing"
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnumIncoming DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum = "incoming"
)

func (e DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum) ToPointer() *DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum {
	return &e
}

func (e *DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "outgoing":
		fallthrough
	case "incoming":
		*e = DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum: %v", v)
	}
}

// DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum - The state of the transit gateway announcement.
type DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum string

const (
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnumAvailable DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum = "available"
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnumPending   DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum = "pending"
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnumFailing   DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum = "failing"
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnumFailed    DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum = "failed"
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnumDeleting  DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum = "deleting"
	DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnumDeleted   DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum = "deleted"
)

func (e DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum) ToPointer() *DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum {
	return &e
}

func (e *DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "available":
		fallthrough
	case "pending":
		fallthrough
	case "failing":
		fallthrough
	case "failed":
		fallthrough
	case "deleting":
		fallthrough
	case "deleted":
		*e = DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum: %v", v)
	}
}

// DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags - Describes a tag.
type DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags struct {
	Key   *string
	Value *string
}

// DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement - Provides details about a deleted transit gateway route table.
type DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement struct {
	AnnouncementDirection                  *DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum
	CoreNetworkID                          *string
	CreationTime                           *time.Time
	PeerCoreNetworkID                      *string
	PeerTransitGatewayID                   *string
	PeeringAttachmentID                    *string
	State                                  *DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum
	Tags                                   []DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags
	TransitGatewayID                       *string
	TransitGatewayRouteTableAnnouncementID *string
	TransitGatewayRouteTableID             *string
}

// DeleteTransitGatewayRouteTableAnnouncementResult - Success
type DeleteTransitGatewayRouteTableAnnouncementResult struct {
	TransitGatewayRouteTableAnnouncement *DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement
}
