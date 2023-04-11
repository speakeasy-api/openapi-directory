import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the association.
 */
export declare class CreateLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVpcAssociationId?: string;
    ownerId?: string;
    state?: string;
    tags?: CreateLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociationTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateLocalGatewayRouteTableVpcAssociationResult extends SpeakeasyBase {
    localGatewayRouteTableVpcAssociation?: CreateLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation;
}
