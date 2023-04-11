import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional icon for the statistic
 */
export declare enum DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinitionMergeMethodEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
export declare class DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition extends SpeakeasyBase {
    /**
     * Category for the stat.
     */
    category?: number;
    /**
     * Statistic group
     */
    group?: number;
    /**
     * Optional URI to an icon for the statistic
     */
    iconImage?: string;
    /**
     * The tier associated with this medal - be it implicitly or explicitly.
     */
    medalTierHash?: number;
    /**
     * Optional icon for the statistic
     */
    mergeMethod?: DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinitionMergeMethodEnum;
    /**
     * Game modes where this statistic can be reported.
     */
    modes?: number[];
    /**
     * Time periods the statistic covers
     */
    periodTypes?: number[];
    /**
     * Description of a stat if applicable.
     */
    statDescription?: string;
    /**
     * Unique programmer friendly ID for this stat
     */
    statId?: string;
    /**
     * Display name
     */
    statName?: string;
    /**
     * Display name abbreviated
     */
    statNameAbbr?: string;
    /**
     * Localized Unit Name for the stat.
     */
    unitLabel?: string;
    /**
     * Unit, if any, for the statistic
     */
    unitType?: number;
    /**
     * Weight assigned to this stat indicating its relative impressiveness.
     */
    weight?: number;
}
