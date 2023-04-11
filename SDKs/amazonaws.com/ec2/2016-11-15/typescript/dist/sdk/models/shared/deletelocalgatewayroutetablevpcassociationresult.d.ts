import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the association.
 */
export declare class DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVpcAssociationId?: string;
    ownerId?: string;
    state?: string;
    tags?: DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociationTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DeleteLocalGatewayRouteTableVpcAssociationResult extends SpeakeasyBase {
    localGatewayRouteTableVpcAssociation?: DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation;
}
