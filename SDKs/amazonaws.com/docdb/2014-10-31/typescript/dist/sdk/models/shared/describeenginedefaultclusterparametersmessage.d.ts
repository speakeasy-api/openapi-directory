import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.
 */
export declare class DescribeEngineDefaultClusterParametersMessage extends SpeakeasyBase {
    dbParameterGroupFamily: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
