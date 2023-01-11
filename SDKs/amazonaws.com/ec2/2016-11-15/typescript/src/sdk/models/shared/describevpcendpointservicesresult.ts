import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVpcEndpointServicesResult
/** 
 * Contains the output of DescribeVpcEndpointServices.
**/
export class DescribeVpcEndpointServicesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceDetails?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceNames?: Record<string, any>;
}
