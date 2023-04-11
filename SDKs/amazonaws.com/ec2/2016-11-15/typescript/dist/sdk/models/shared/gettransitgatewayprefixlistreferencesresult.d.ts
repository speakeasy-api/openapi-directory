import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the prefix list reference.
 */
export declare enum GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferencesStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferencesTransitGatewayAttachmentResourceTypeEnum {
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
export declare class GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferencesTransitGatewayAttachment extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferencesTransitGatewayAttachmentResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * Describes a prefix list reference.
 */
export declare class GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferences extends SpeakeasyBase {
    blackhole?: boolean;
    prefixListId?: string;
    prefixListOwnerId?: string;
    state?: GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferencesStateEnum;
    transitGatewayAttachment?: GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferencesTransitGatewayAttachment;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class GetTransitGatewayPrefixListReferencesResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayPrefixListReferences?: GetTransitGatewayPrefixListReferencesResultTransitGatewayPrefixListReferences[];
}
