import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHostsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hosts?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
