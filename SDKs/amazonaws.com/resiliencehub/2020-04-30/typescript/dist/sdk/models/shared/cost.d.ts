import { SpeakeasyBase } from "../../../internal/utils";
import { CostFrequencyEnum } from "./costfrequencyenum";
/**
 * Defines a cost object.
 */
export declare class Cost extends SpeakeasyBase {
    amount: number;
    currency: string;
    frequency: CostFrequencyEnum;
}
