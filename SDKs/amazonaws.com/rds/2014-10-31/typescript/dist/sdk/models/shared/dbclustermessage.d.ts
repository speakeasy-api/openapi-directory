import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterList } from "./dbclusterlist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
**/
export declare class DbClusterMessage extends SpeakeasyBase {
    dbClusters?: DbClusterList[];
    marker?: string;
}
