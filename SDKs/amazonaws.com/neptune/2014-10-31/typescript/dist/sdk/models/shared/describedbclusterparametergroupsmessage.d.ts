import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroupName?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
