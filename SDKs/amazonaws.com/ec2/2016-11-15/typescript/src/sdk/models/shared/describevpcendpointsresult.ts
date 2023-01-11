import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVpcEndpointsResult
/** 
 * Contains the output of DescribeVpcEndpoints.
**/
export class DescribeVpcEndpointsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcEndpoints?: Record<string, any>;
}
