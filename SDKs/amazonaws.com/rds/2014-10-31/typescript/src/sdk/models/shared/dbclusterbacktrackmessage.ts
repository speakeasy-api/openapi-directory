import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterBacktrackList } from "./dbclusterbacktracklist";



// DbClusterBacktrackMessage
/** 
 * Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
**/
export class DbClusterBacktrackMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterBacktrackList })
  dbClusterBacktracks?: DbClusterBacktrackList[];

  @SpeakeasyMetadata()
  marker?: string;
}
