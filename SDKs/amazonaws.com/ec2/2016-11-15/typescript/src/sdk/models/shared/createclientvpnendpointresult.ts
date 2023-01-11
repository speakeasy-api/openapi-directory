import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateClientVpnEndpointResultStatus
/** 
 * The current state of the Client VPN endpoint.
**/
export class CreateClientVpnEndpointResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class CreateClientVpnEndpointResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientVpnEndpointId?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsName?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: CreateClientVpnEndpointResultStatus;
}
