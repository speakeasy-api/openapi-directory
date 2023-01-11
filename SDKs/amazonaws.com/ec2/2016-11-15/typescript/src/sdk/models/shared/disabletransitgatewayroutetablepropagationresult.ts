import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableTransitGatewayRouteTablePropagationResultPropagation
/** 
 * Information about route propagation.
**/
export class DisableTransitGatewayRouteTablePropagationResultPropagation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: Record<string, any>;

  @SpeakeasyMetadata()
  resourceType?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: Record<string, any>;
}


export class DisableTransitGatewayRouteTablePropagationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  propagation?: DisableTransitGatewayRouteTablePropagationResultPropagation;
}
