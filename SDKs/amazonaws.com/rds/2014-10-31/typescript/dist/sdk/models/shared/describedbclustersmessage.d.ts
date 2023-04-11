import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeDBClustersMessage extends SpeakeasyBase {
    dbClusterIdentifier?: string;
    filters?: FilterList[];
    includeShared?: boolean;
    marker?: string;
    maxRecords?: number;
}
