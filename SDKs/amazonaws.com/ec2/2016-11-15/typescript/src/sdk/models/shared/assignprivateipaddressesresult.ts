import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignPrivateIpAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignedIpv4Prefixes?: Record<string, any>;

  @SpeakeasyMetadata()
  assignedPrivateIpAddresses?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;
}
