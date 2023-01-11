import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCoipPoolUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  coipAddressUsages?: Record<string, any>;

  @SpeakeasyMetadata()
  coipPoolId?: Record<string, any>;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: Record<string, any>;
}
