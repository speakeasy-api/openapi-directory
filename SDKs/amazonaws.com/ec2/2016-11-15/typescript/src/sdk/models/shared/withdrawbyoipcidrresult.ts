import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WithdrawByoipCidrResultByoipCidr
/** 
 * Information about the address pool.
**/
export class WithdrawByoipCidrResultByoipCidr extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


export class WithdrawByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: WithdrawByoipCidrResultByoipCidr;
}
