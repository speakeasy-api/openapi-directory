import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCarrierGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGateways?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
