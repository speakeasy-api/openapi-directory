import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllocateAddressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: Record<string, any>;

  @SpeakeasyMetadata()
  carrierIp?: Record<string, any>;

  @SpeakeasyMetadata()
  customerOwnedIp?: Record<string, any>;

  @SpeakeasyMetadata()
  customerOwnedIpv4Pool?: Record<string, any>;

  @SpeakeasyMetadata()
  domain?: Record<string, any>;

  @SpeakeasyMetadata()
  networkBorderGroup?: Record<string, any>;

  @SpeakeasyMetadata()
  publicIp?: Record<string, any>;

  @SpeakeasyMetadata()
  publicIpv4Pool?: Record<string, any>;
}
