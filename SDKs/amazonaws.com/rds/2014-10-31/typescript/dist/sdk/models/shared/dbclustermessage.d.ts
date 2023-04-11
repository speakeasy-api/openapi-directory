import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterList } from "./dbclusterlist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
 */
export declare class DBClusterMessage extends SpeakeasyBase {
    dbClusters?: DBClusterList[];
    marker?: string;
}
