import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInternetGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  internetGateways?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
