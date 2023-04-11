import { SpeakeasyBase } from "../../../internal/utils";
export declare class RunnerChange extends SpeakeasyBase {
    /**
     * Available To Back - PriceVol tuple delta of price changes (0 vol is remove)
     */
    atb?: number[][];
    /**
     * Available To Lay - PriceVol tuple delta of price changes (0 vol is remove)
     */
    atl?: number[][];
    /**
     * Best Available To Back - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
     */
    batb?: number[][];
    /**
     * Best Available To Lay - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
     */
    batl?: number[][];
    /**
     * Best Display Available To Back (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
     */
    bdatb?: number[][];
    /**
     * Best Display Available To Lay (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
     */
    bdatl?: number[][];
    /**
     * Handicap - the handicap of the runner (selection) (null if not applicable)
     */
    hc?: number;
    /**
     * Selection Id - the id of the runner (selection)
     */
    id?: number;
    /**
     * Last Traded Price - The last traded price (or null if un-changed)
     */
    ltp?: number;
    /**
     * Starting Price Back - PriceVol tuple delta of price changes (0 vol is remove)
     */
    spb?: number[][];
    /**
     * Starting Price Far - The far starting price (or null if un-changed)
     */
    spf?: number;
    /**
     * Starting Price Lay - PriceVol tuple delta of price changes (0 vol is remove)
     */
    spl?: number[][];
    /**
     * Starting Price Near - The far starting price (or null if un-changed)
     */
    spn?: number;
    /**
     * Traded - PriceVol tuple delta of price changes (0 vol is remove)
     */
    trd?: number[][];
    /**
     * The total amount matched. This value is truncated at 2dp.
     */
    tv?: number;
}
