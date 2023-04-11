import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeEngineDefaultParametersMessage extends SpeakeasyBase {
    dbParameterGroupFamily: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
