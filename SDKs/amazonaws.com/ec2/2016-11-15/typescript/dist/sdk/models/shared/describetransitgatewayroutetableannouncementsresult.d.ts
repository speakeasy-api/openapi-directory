import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The direction for the route table announcement.
 */
export declare enum DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncementsAnnouncementDirectionEnum {
    Outgoing = "outgoing",
    Incoming = "incoming"
}
/**
 * The state of the transit gateway announcement.
 */
export declare enum DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncementsStateEnum {
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
export declare class DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncementsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a transit gateway route table announcement.
 */
export declare class DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncements extends SpeakeasyBase {
    announcementDirection?: DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncementsAnnouncementDirectionEnum;
    coreNetworkId?: string;
    creationTime?: Date;
    peerCoreNetworkId?: string;
    peerTransitGatewayId?: string;
    peeringAttachmentId?: string;
    state?: DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncementsStateEnum;
    tags?: DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncementsTags[];
    transitGatewayId?: string;
    transitGatewayRouteTableAnnouncementId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayRouteTableAnnouncementsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayRouteTableAnnouncements?: DescribeTransitGatewayRouteTableAnnouncementsResultTransitGatewayRouteTableAnnouncements[];
}
