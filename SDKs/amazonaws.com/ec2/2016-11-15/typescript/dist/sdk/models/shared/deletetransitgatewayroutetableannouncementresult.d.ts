import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The direction for the route table announcement.
 */
export declare enum DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum {
    Outgoing = "outgoing",
    Incoming = "incoming"
}
/**
 * The state of the transit gateway announcement.
 */
export declare enum DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum {
    Available = "available",
    Pending = "pending",
    Failing = "failing",
    Failed = "failed",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Provides details about a deleted transit gateway route table.
 */
export declare class DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement extends SpeakeasyBase {
    announcementDirection?: DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum;
    coreNetworkId?: string;
    creationTime?: Date;
    peerCoreNetworkId?: string;
    peerTransitGatewayId?: string;
    peeringAttachmentId?: string;
    state?: DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum;
    tags?: DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags[];
    transitGatewayId?: string;
    transitGatewayRouteTableAnnouncementId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayRouteTableAnnouncementResult extends SpeakeasyBase {
    transitGatewayRouteTableAnnouncement?: DeleteTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement;
}
