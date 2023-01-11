import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterList } from "./dbclusterlist";



// DbClusterMessage
/** 
 * Represents the output of <a>DescribeDBClusters</a>.
**/
export class DbClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterList })
  dbClusters?: DbClusterList[];

  @SpeakeasyMetadata()
  marker?: string;
}
