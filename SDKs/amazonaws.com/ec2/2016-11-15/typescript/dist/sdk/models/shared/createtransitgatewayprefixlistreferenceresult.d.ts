import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the prefix list reference.
 */
export declare enum CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachmentResourceTypeEnum {
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
export declare class CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachmentResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * Information about the prefix list reference.
 */
export declare class CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
    blackhole?: boolean;
    prefixListId?: string;
    prefixListOwnerId?: string;
    state?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceStateEnum;
    transitGatewayAttachment?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
    transitGatewayPrefixListReference?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
