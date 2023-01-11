import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionByoipCidrResultByoipCidr
/** 
 * Information about the address range.
**/
export class ProvisionByoipCidrResultByoipCidr extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


export class ProvisionByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: ProvisionByoipCidrResultByoipCidr;
}
