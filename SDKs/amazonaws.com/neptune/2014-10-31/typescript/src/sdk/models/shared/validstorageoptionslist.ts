import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleRangeList } from "./doublerangelist";
import { RangeList } from "./rangelist";



// ValidStorageOptionsList
/** 
 * <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
**/
export class ValidStorageOptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DoubleRangeList })
  iopsToStorageRatio?: DoubleRangeList[];

  @SpeakeasyMetadata({ elemType: RangeList })
  provisionedIops?: RangeList[];

  @SpeakeasyMetadata({ elemType: RangeList })
  storageSize?: RangeList[];

  @SpeakeasyMetadata()
  storageType?: string;
}
