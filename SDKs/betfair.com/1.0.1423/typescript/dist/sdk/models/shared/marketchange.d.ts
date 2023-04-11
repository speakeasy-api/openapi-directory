import { SpeakeasyBase } from "../../../internal/utils";
import { MarketDefinition } from "./marketdefinition";
import { RunnerChange } from "./runnerchange";
export declare class MarketChange extends SpeakeasyBase {
    /**
     * Conflated - have more than a single change been combined (or null if not conflated)
     */
    con?: boolean;
    /**
     * Market Id - the id of the market
     */
    id?: string;
    /**
     * Image - replace existing prices / data with the data supplied: it is not a delta (or null if delta)
     */
    img?: boolean;
    marketDefinition?: MarketDefinition;
    /**
     * Runner Changes - a list of changes to runners (or null if un-changed)
     */
    rc?: RunnerChange[];
    /**
     * The total amount matched across the market. This value is truncated at 2dp (or null if un-changed)
     */
    tv?: number;
}
