import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSpotFleetRequestsResponse
/** 
 * Contains the output of DescribeSpotFleetRequests.
**/
export class DescribeSpotFleetRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  spotFleetRequestConfigs?: Record<string, any>;
}
