import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderFilter extends SpeakeasyBase {
    /**
     * Internal use only & should not be set on your filter (your subscription is already locked to your account). If set subscription will fail.
     */
    accountIds?: number[];
    /**
     * Restricts to specified customerStrategyRefs; this will filter orders and StrategyMatchChanges accordingly (Note: overall postition is not filtered)
     */
    customerStrategyRefs?: string[];
    /**
     * Returns overall / net position (See: OrderRunnerChange.mb / OrderRunnerChange.ml). Default=true
     */
    includeOverallPosition?: boolean;
    /**
     * Returns strategy positions (See: OrderRunnerChange.smc=Map<customerStrategyRef, StrategyMatchChange>) - these are sent in delta format as per overall position. Default=false
     */
    partitionMatchedByStrategyRef?: boolean;
}
