import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelSpotFleetRequestsResponse
/** 
 * Contains the output of CancelSpotFleetRequests.
**/
export class CancelSpotFleetRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successfulFleetRequests?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessfulFleetRequests?: Record<string, any>;
}
