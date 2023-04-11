import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeGlobalClustersMessage extends SpeakeasyBase {
    filters?: FilterList[];
    globalClusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
}
