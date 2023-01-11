import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCoipPoolsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  coipPools?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
