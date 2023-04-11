import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a Delta Sync configuration.
 */
export declare class DeltaSyncConfig extends SpeakeasyBase {
    baseTableTTL?: number;
    deltaSyncTableName?: string;
    deltaSyncTableTTL?: number;
}
