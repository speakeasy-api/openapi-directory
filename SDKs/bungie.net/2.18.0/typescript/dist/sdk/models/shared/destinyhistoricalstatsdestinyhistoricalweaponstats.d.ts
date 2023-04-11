import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
export declare class DestinyHistoricalStatsDestinyHistoricalWeaponStats extends SpeakeasyBase {
    /**
     * The hash ID of the item definition that describes the weapon.
     */
    referenceId?: number;
    /**
     * Collection of stats for the period.
     */
    values?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
