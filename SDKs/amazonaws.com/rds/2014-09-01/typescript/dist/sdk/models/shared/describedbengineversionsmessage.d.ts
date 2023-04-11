import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBEngineVersionsMessage extends SpeakeasyBase {
    dbParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    filters?: FilterList[];
    listSupportedCharacterSets?: boolean;
    marker?: string;
    maxRecords?: number;
}
