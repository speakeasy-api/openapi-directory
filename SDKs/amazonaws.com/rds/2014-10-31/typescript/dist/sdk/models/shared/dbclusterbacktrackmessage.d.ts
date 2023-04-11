import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterBacktrackList } from "./dbclusterbacktracklist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
 */
export declare class DBClusterBacktrackMessage extends SpeakeasyBase {
    dbClusterBacktracks?: DBClusterBacktrackList[];
    marker?: string;
}
