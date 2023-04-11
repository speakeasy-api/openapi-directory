import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the prefix list reference.
 */
export declare enum DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachmentResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * Information about the transit gateway attachment.
 */
export declare class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachmentResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * Information about the deleted prefix list reference.
 */
export declare class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
    blackhole?: boolean;
    prefixListId?: string;
    prefixListOwnerId?: string;
    state?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceStateEnum;
    transitGatewayAttachment?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
    transitGatewayPrefixListReference?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
