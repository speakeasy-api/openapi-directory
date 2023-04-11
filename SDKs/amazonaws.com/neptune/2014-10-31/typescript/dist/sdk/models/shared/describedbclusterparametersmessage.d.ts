import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBClusterParametersMessage extends SpeakeasyBase {
    dbClusterParameterGroupName: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    source?: string;
}
