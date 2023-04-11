import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the prefix list reference.
 */
export declare enum ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachmentResourceTypeEnum {
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
export declare class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachmentResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * Information about the prefix list reference.
 */
export declare class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
    blackhole?: boolean;
    prefixListId?: string;
    prefixListOwnerId?: string;
    state?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceStateEnum;
    transitGatewayAttachment?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class ModifyTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
    transitGatewayPrefixListReference?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
