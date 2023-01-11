import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { SupportedCharacterSetsList } from "./supportedcharactersetslist";
import { SupportedTimezonesList } from "./supportedtimezoneslist";
import { ValidUpgradeTargetList } from "./validupgradetargetlist";
/**
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
**/
export declare class DbEngineVersionList extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    defaultCharacterSet?: CharacterSet;
    engine?: string;
    engineVersion?: string;
    exportableLogTypes?: string[];
    status?: string;
    supportedCharacterSets?: SupportedCharacterSetsList[];
    supportedEngineModes?: string[];
    supportedFeatureNames?: string[];
    supportedNcharCharacterSets?: SupportedCharacterSetsList[];
    supportedTimezones?: SupportedTimezonesList[];
    supportsGlobalDatabases?: boolean;
    supportsLogExportsToCloudwatchLogs?: boolean;
    supportsParallelQuery?: boolean;
    supportsReadReplica?: boolean;
    validUpgradeTarget?: ValidUpgradeTargetList[];
}
