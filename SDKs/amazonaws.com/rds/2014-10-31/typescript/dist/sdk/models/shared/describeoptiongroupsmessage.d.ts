import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeOptionGroupsMessage extends SpeakeasyBase {
    engineName?: string;
    filters?: FilterList[];
    majorEngineVersion?: string;
    marker?: string;
    maxRecords?: number;
    optionGroupName?: string;
}
