import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeNetworkInterfacesResult
/** 
 * Contains the output of DescribeNetworkInterfaces.
**/
export class DescribeNetworkInterfacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInterfaces?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
