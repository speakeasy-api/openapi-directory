import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeDBEngineVersions</a>.
 */
export declare class DescribeDBEngineVersionsMessage extends SpeakeasyBase {
    dbParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    filters?: FilterList[];
    listSupportedCharacterSets?: boolean;
    listSupportedTimezones?: boolean;
    marker?: string;
    maxRecords?: number;
}
