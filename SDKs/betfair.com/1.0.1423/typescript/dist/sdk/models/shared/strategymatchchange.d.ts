import { SpeakeasyBase } from "../../../internal/utils";
export declare class StrategyMatchChange extends SpeakeasyBase {
    /**
     * Matched Backs - matched amounts by distinct matched price on the Back side for this strategy
     */
    mb?: number[][];
    /**
     * Matched Lays - matched amounts by distinct matched price on the Lay side for this strategy
     */
    ml?: number[][];
}
