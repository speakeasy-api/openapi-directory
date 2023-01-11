import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignIpv6AddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignedIpv6Addresses?: Record<string, any>;

  @SpeakeasyMetadata()
  assignedIpv6Prefixes?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;
}
