import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsSecurityPolicyEnum } from "./tlssecuritypolicyenum";



// DomainEndpointOptions
/** 
 * The domain's endpoint options.
**/
export class DomainEndpointOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enforceHTTPS?: boolean;

  @SpeakeasyMetadata()
  tlsSecurityPolicy?: TlsSecurityPolicyEnum;
}
