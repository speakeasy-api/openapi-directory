import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeSourceRegionsMessage extends SpeakeasyBase {
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    regionName?: string;
}
