import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterList } from "./dbclusterlist";



// DbClusterMessage
/** 
 * Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
**/
export class DbClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterList })
  dbClusters?: DbClusterList[];

  @SpeakeasyMetadata()
  marker?: string;
}
