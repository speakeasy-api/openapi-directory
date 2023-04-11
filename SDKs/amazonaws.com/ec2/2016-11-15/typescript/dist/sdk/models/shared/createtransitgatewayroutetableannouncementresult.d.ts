import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The direction for the route table announcement.
 */
export declare enum CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum {
    Outgoing = "outgoing",
    Incoming = "incoming"
}
/**
 * The state of the transit gateway announcement.
 */
export declare enum CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum {
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
export declare class CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Provides details about the transit gateway route table announcement.
 */
export declare class CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement extends SpeakeasyBase {
    announcementDirection?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum;
    coreNetworkId?: string;
    creationTime?: Date;
    peerCoreNetworkId?: string;
    peerTransitGatewayId?: string;
    peeringAttachmentId?: string;
    state?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum;
    tags?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags[];
    transitGatewayId?: string;
    transitGatewayRouteTableAnnouncementId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayRouteTableAnnouncementResult extends SpeakeasyBase {
    transitGatewayRouteTableAnnouncement?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement;
}
