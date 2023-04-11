import { SpeakeasyBase } from "../../../internal/utils";
/**
 * baggageAllowance
 */
export declare class BaggageAllowance extends SpeakeasyBase {
    /**
     * Total number of units
     */
    quantity?: number;
    /**
     * Weight of the baggage allowance
     */
    weight?: number;
    /**
     * Code to qualify unit as pounds or kilos
     */
    weightUnit?: string;
}
