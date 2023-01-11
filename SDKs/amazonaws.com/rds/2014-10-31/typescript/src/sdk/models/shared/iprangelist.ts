import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpRangeList
/** 
 *  This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. 
**/
export class IpRangeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrip?: string;

  @SpeakeasyMetadata()
  status?: string;
}
