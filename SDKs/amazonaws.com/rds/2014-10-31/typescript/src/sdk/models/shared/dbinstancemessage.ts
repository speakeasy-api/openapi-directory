import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceList } from "./dbinstancelist";



// DbInstanceMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action. 
**/
export class DbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstanceList })
  dbInstances?: DbInstanceList[];

  @SpeakeasyMetadata()
  marker?: string;
}
