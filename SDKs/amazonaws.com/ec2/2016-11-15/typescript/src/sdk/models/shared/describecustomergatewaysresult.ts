import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeCustomerGatewaysResult
/** 
 * Contains the output of DescribeCustomerGateways.
**/
export class DescribeCustomerGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customerGateways?: Record<string, any>;
}
