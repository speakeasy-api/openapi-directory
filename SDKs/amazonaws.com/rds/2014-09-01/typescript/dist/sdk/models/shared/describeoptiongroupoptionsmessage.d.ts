import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeOptionGroupOptionsMessage extends SpeakeasyBase {
    engineName: string;
    filters?: FilterList[];
    majorEngineVersion?: string;
    marker?: string;
    maxRecords?: number;
}
