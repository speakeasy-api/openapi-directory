import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAssociatedIpv6PoolCidrsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv6CidrAssociations?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
