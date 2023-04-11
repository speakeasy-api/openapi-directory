import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
 */
export declare class DestinyDestinyStat extends SpeakeasyBase {
    /**
     * The hash identifier for the Stat. Use it to look up the DestinyStatDefinition for static data about the stat.
     */
    statHash?: number;
    /**
     * The current value of the Stat.
     */
    value?: number;
}
