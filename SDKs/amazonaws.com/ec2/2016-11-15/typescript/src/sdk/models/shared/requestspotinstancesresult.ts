import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestSpotInstancesResult
/** 
 * Contains the output of RequestSpotInstances.
**/
export class RequestSpotInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  spotInstanceRequests?: Record<string, any>;
}
