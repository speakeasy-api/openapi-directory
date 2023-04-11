import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBClustersMessage extends SpeakeasyBase {
    dbClusterIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
