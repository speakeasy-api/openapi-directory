import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from "./destinyhistoricalstatsdestinyhistoricalstatsperiodgroup";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
export declare class DestinyHistoricalStatsDestinyHistoricalStatsByPeriod extends SpeakeasyBase {
    allTime?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    allTimeTier1?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    allTimeTier2?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    allTimeTier3?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    daily?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[];
    monthly?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[];
}
