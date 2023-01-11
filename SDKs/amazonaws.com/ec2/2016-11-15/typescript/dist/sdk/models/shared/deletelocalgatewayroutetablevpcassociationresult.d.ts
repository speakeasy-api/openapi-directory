import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the association.
**/
export declare class DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation extends SpeakeasyBase {
    localGatewayId?: Record<string, any>;
    localGatewayRouteTableArn?: Record<string, any>;
    localGatewayRouteTableId?: Record<string, any>;
    localGatewayRouteTableVpcAssociationId?: Record<string, any>;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    vpcId?: Record<string, any>;
}
export declare class DeleteLocalGatewayRouteTableVpcAssociationResult extends SpeakeasyBase {
    localGatewayRouteTableVpcAssociation?: DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation;
}
