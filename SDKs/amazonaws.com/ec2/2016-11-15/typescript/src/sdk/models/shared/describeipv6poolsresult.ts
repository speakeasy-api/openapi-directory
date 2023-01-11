import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeIpv6PoolsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv6Pools?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
