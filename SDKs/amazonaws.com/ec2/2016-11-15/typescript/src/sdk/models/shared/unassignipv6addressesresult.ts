import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnassignIpv6AddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  unassignedIpv6Addresses?: Record<string, any>;

  @SpeakeasyMetadata()
  unassignedIpv6Prefixes?: Record<string, any>;
}
