import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePublicIpv4PoolsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  publicIpv4Pools?: Record<string, any>;
}
