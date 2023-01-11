import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation
/** 
 * Information about the association.
**/
export class DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  localGatewayRouteTableArn?: Record<string, any>;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: Record<string, any>;

  @SpeakeasyMetadata()
  localGatewayRouteTableVpcAssociationId?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


export class DeleteLocalGatewayRouteTableVpcAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayRouteTableVpcAssociation?: DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation;
}
