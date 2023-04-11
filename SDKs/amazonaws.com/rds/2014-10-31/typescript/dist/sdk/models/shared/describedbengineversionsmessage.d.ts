import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBEngineVersionsMessage extends SpeakeasyBase {
    dbParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    filters?: FilterList[];
    includeAll?: boolean;
    listSupportedCharacterSets?: boolean;
    listSupportedTimezones?: boolean;
    marker?: string;
    maxRecords?: number;
}
