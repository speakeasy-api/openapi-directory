import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClassicLinkInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instances?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
