import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterList } from "./dbclusterlist";
/**
 * Represents the output of <a>DescribeDBClusters</a>.
 */
export declare class DBClusterMessage extends SpeakeasyBase {
    dbClusters?: DBClusterList[];
    marker?: string;
}
