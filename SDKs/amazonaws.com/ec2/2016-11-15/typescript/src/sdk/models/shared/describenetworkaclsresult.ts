import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNetworkAclsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkAcls?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
