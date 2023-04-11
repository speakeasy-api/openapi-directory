import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the local gateway route table virtual interface group association.
 */
export declare class CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    ownerId?: string;
    state?: string;
    tags?: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags[];
}
/**
 * Success
 */
export declare class CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult extends SpeakeasyBase {
    localGatewayRouteTableVirtualInterfaceGroupAssociation?: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}
