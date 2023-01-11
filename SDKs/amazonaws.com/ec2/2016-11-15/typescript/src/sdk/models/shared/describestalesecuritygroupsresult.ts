import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStaleSecurityGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  staleSecurityGroupSet?: Record<string, any>;
}
