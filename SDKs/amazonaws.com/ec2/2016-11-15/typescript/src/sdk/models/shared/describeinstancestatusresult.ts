import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInstanceStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceStatuses?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
