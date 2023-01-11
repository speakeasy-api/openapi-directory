import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeNetworkInterfacePermissionsResult
/** 
 * Contains the output for DescribeNetworkInterfacePermissions.
**/
export class DescribeNetworkInterfacePermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInterfacePermissions?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
