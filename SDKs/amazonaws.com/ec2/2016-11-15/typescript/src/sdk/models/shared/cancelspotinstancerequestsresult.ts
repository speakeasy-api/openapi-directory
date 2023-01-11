import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelSpotInstanceRequestsResult
/** 
 * Contains the output of CancelSpotInstanceRequests.
**/
export class CancelSpotInstanceRequestsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cancelledSpotInstanceRequests?: Record<string, any>;
}
