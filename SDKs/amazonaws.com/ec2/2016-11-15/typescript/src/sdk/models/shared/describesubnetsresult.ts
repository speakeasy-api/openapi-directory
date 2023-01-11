import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSubnetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  subnets?: Record<string, any>;
}
