import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTransitGatewayRoutesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  additionalRoutesAvailable?: Record<string, any>;

  @SpeakeasyMetadata()
  routes?: Record<string, any>;
}
