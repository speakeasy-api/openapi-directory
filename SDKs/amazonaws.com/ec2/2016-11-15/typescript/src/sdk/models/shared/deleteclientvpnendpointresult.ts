import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteClientVpnEndpointResultStatus
/** 
 * The current state of the Client VPN endpoint.
**/
export class DeleteClientVpnEndpointResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class DeleteClientVpnEndpointResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: DeleteClientVpnEndpointResultStatus;
}
