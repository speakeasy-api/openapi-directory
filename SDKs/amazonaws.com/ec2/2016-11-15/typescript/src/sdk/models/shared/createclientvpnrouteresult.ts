import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateClientVpnRouteResultStatus
/** 
 * The current state of the route.
**/
export class CreateClientVpnRouteResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class CreateClientVpnRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: CreateClientVpnRouteResultStatus;
}
