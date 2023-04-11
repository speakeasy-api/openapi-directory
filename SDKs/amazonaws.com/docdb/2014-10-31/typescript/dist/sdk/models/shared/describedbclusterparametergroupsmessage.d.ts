import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeDBClusterParameterGroups</a>.
 */
export declare class DescribeDBClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroupName?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
