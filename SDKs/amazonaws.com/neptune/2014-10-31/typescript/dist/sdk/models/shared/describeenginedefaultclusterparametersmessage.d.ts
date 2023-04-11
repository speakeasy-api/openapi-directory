import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeEngineDefaultClusterParametersMessage extends SpeakeasyBase {
    dbParameterGroupFamily: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
