import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RevokeClientVpnIngressResultStatus
/** 
 * The current state of the authorization rule.
**/
export class RevokeClientVpnIngressResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class RevokeClientVpnIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: RevokeClientVpnIngressResultStatus;
}
