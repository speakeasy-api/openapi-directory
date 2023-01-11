import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesList } from "./describedblogfileslist";



// DescribeDbLogFilesResponse
/** 
 *  The response from a call to <code>DescribeDBLogFiles</code>. 
**/
export class DescribeDbLogFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DescribeDbLogFilesList })
  describeDBLogFiles?: DescribeDbLogFilesList[];

  @SpeakeasyMetadata()
  marker?: string;
}
