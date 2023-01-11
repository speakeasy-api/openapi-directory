import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterBacktrackList } from "./dbclusterbacktracklist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
**/
export declare class DbClusterBacktrackMessage extends SpeakeasyBase {
    dbClusterBacktracks?: DbClusterBacktrackList[];
    marker?: string;
}
