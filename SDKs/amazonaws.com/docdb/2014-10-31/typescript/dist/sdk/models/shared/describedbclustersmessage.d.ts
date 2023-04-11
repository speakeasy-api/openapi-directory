import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeDBClusters</a>.
 */
export declare class DescribeDBClustersMessage extends SpeakeasyBase {
    dbClusterIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
