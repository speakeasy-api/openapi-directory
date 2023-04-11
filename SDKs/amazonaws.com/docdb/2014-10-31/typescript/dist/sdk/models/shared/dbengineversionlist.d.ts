import { SpeakeasyBase } from "../../../internal/utils";
import { ValidUpgradeTargetList } from "./validupgradetargetlist";
/**
 *  Detailed information about an engine version.
 */
export declare class DBEngineVersionList extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    engine?: string;
    engineVersion?: string;
    exportableLogTypes?: string[];
    supportsLogExportsToCloudwatchLogs?: boolean;
    validUpgradeTarget?: ValidUpgradeTargetList[];
}
