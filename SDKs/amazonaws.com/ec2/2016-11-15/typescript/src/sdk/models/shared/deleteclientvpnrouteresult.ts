import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteClientVpnRouteResultStatus
/** 
 * The current state of the route.
**/
export class DeleteClientVpnRouteResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class DeleteClientVpnRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: DeleteClientVpnRouteResultStatus;
}
