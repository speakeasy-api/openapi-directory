import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { SupportedCharacterSetsList } from "./supportedcharactersetslist";
import { SupportedTimezonesList } from "./supportedtimezoneslist";
import { ValidUpgradeTargetList } from "./validupgradetargetlist";
/**
 *  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
 */
export declare class DBEngineVersionList extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    defaultCharacterSet?: CharacterSet;
    engine?: string;
    engineVersion?: string;
    exportableLogTypes?: string[];
    supportedCharacterSets?: SupportedCharacterSetsList[];
    supportedTimezones?: SupportedTimezonesList[];
    supportsGlobalDatabases?: boolean;
    supportsLogExportsToCloudwatchLogs?: boolean;
    supportsReadReplica?: boolean;
    validUpgradeTarget?: ValidUpgradeTargetList[];
}
