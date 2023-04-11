import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBParameterGroupsMessage extends SpeakeasyBase {
    dbParameterGroupName?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
