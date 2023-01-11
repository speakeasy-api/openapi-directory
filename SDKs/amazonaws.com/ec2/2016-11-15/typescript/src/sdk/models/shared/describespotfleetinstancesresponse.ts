import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSpotFleetInstancesResponse
/** 
 * Contains the output of DescribeSpotFleetInstances.
**/
export class DescribeSpotFleetInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeInstances?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  spotFleetRequestId?: Record<string, any>;
}
