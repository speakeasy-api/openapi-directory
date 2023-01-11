import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizeClientVpnIngressResultStatus
/** 
 * The current state of the authorization rule.
**/
export class AuthorizeClientVpnIngressResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class AuthorizeClientVpnIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: AuthorizeClientVpnIngressResultStatus;
}
