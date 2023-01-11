import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableTransitGatewayRouteTablePropagationResultPropagation
/** 
 * Information about route propagation.
**/
export class EnableTransitGatewayRouteTablePropagationResultPropagation extends SpeakeasyBase {
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


export class EnableTransitGatewayRouteTablePropagationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  propagation?: EnableTransitGatewayRouteTablePropagationResultPropagation;
}
