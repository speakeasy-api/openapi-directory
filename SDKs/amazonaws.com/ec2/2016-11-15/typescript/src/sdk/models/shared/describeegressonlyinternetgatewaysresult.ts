import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEgressOnlyInternetGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  egressOnlyInternetGateways?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
