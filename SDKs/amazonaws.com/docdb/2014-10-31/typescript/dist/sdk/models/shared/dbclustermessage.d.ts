import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterList } from "./dbclusterlist";
/**
 * Represents the output of <a>DescribeDBClusters</a>.
**/
export declare class DbClusterMessage extends SpeakeasyBase {
    dbClusters?: DbClusterList[];
    marker?: string;
}
