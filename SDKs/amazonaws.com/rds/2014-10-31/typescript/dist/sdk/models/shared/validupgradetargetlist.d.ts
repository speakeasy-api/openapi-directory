import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The version of the database engine that a DB instance can be upgraded to.
 */
export declare class ValidUpgradeTargetList extends SpeakeasyBase {
    autoUpgrade?: boolean;
    description?: string;
    engine?: string;
    engineVersion?: string;
    isMajorVersionUpgrade?: boolean;
    supportedEngineModes?: string[];
    supportsBabelfish?: boolean;
    supportsGlobalDatabases?: boolean;
    supportsParallelQuery?: boolean;
}
