import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeprovisionByoipCidrResultByoipCidr
/** 
 * Information about the address range.
**/
export class DeprovisionByoipCidrResultByoipCidr extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


export class DeprovisionByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: DeprovisionByoipCidrResultByoipCidr;
}
