import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeDbLogFilesList
/** 
 * This data type is used as a response element to <code>DescribeDBLogFiles</code>.
**/
export class DescribeDbLogFilesList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastWritten?: number;

  @SpeakeasyMetadata()
  logFileName?: string;

  @SpeakeasyMetadata()
  size?: number;
}
