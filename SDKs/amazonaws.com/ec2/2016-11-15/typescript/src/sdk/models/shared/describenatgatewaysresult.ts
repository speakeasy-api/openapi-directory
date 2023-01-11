import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNatGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  natGateways?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
