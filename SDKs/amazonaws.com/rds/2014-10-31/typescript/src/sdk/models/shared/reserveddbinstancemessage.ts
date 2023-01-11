import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstanceList } from "./reserveddbinstancelist";



// ReservedDbInstanceMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action. 
**/
export class ReservedDbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstanceList })
  reservedDBInstances?: ReservedDbInstanceList[];
}
