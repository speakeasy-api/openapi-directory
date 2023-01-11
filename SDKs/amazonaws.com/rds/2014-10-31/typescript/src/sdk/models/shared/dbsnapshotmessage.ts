import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshotList } from "./dbsnapshotlist";



// DbSnapshotMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action. 
**/
export class DbSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSnapshotList })
  dbSnapshots?: DbSnapshotList[];

  @SpeakeasyMetadata()
  marker?: string;
}
