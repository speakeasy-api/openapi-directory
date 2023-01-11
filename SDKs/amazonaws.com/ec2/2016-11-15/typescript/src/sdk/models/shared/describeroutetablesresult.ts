import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeRouteTablesResult
/** 
 * Contains the output of DescribeRouteTables.
**/
export class DescribeRouteTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  routeTables?: Record<string, any>;
}
