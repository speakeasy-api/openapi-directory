import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
import { StrategyMatchChange } from "./strategymatchchange";
export declare class OrderRunnerChange extends SpeakeasyBase {
    fullImage?: boolean;
    /**
     * Handicap - the handicap of the runner (selection) (null if not applicable)
     */
    hc?: number;
    /**
     * Selection Id - the id of the runner (selection)
     */
    id?: number;
    /**
     * Matched Backs - matched amounts by distinct matched price on the Back side for this runner (selection)
     */
    mb?: number[][];
    /**
     * Matched Lays - matched amounts by distinct matched price on the Lay side for this runner (selection)
     */
    ml?: number[][];
    /**
     * Strategy Matches - Matched Backs and Matched Lays grouped by strategy reference
     */
    smc?: Record<string, StrategyMatchChange>;
    /**
     * Unmatched Orders - orders on this runner (selection) that are not fully matched
     */
    uo?: Order[];
}
