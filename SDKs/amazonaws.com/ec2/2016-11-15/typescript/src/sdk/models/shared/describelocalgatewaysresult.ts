import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLocalGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGateways?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
