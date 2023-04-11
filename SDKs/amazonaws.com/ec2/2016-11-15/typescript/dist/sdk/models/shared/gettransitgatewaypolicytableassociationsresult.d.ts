import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type for the transit gateway policy table association.
 */
export declare enum GetTransitGatewayPolicyTableAssociationsResultAssociationsResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The state of the transit gateway policy table association.
 */
export declare enum GetTransitGatewayPolicyTableAssociationsResultAssociationsStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Describes a transit gateway policy table association.
 */
export declare class GetTransitGatewayPolicyTableAssociationsResultAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: GetTransitGatewayPolicyTableAssociationsResultAssociationsResourceTypeEnum;
    state?: GetTransitGatewayPolicyTableAssociationsResultAssociationsStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayPolicyTableId?: string;
}
/**
 * Success
 */
export declare class GetTransitGatewayPolicyTableAssociationsResult extends SpeakeasyBase {
    associations?: GetTransitGatewayPolicyTableAssociationsResultAssociations[];
    nextToken?: string;
}
