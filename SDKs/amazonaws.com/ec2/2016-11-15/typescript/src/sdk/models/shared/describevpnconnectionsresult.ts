import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVpnConnectionsResult
/** 
 * Contains the output of DescribeVpnConnections.
**/
export class DescribeVpnConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnConnections?: Record<string, any>;
}
