import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSpotInstanceRequestsResult
/** 
 * Contains the output of DescribeSpotInstanceRequests.
**/
export class DescribeSpotInstanceRequestsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  spotInstanceRequests?: Record<string, any>;
}
