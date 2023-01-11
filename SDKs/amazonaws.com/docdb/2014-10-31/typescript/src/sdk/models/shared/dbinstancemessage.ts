import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceList } from "./dbinstancelist";



// DbInstanceMessage
/** 
 * Represents the output of <a>DescribeDBInstances</a>.
**/
export class DbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstanceList })
  dbInstances?: DbInstanceList[];

  @SpeakeasyMetadata()
  marker?: string;
}
