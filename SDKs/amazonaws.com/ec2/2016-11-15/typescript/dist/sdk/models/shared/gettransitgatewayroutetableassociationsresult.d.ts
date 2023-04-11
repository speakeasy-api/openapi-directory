import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum GetTransitGatewayRouteTableAssociationsResultAssociationsResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The state of the association.
 */
export declare enum GetTransitGatewayRouteTableAssociationsResultAssociationsStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Describes an association between a route table and a resource attachment.
 */
export declare class GetTransitGatewayRouteTableAssociationsResultAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: GetTransitGatewayRouteTableAssociationsResultAssociationsResourceTypeEnum;
    state?: GetTransitGatewayRouteTableAssociationsResultAssociationsStateEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class GetTransitGatewayRouteTableAssociationsResult extends SpeakeasyBase {
    associations?: GetTransitGatewayRouteTableAssociationsResultAssociations[];
    nextToken?: string;
}
