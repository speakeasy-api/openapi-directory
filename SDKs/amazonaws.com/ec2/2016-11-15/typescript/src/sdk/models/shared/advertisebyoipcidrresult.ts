import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvertiseByoipCidrResultByoipCidr
/** 
 * Information about the address range.
**/
export class AdvertiseByoipCidrResultByoipCidr extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


export class AdvertiseByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: AdvertiseByoipCidrResultByoipCidr;
}
