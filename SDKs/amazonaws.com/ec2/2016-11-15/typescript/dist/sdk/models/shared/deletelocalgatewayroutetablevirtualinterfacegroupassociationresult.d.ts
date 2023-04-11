import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the association.
 */
export declare class DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    ownerId?: string;
    state?: string;
    tags?: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags[];
}
/**
 * Success
 */
export declare class DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult extends SpeakeasyBase {
    localGatewayRouteTableVirtualInterfaceGroupAssociation?: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}
