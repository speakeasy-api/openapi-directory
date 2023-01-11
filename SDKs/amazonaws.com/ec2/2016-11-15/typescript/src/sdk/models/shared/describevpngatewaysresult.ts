import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVpnGatewaysResult
/** 
 * Contains the output of DescribeVpnGateways.
**/
export class DescribeVpnGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnGateways?: Record<string, any>;
}
