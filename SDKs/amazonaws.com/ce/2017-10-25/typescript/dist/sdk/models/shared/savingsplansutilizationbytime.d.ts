import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { SavingsPlansAmortizedCommitment } from "./savingsplansamortizedcommitment";
import { SavingsPlansSavings } from "./savingsplanssavings";
import { SavingsPlansUtilization } from "./savingsplansutilization";
/**
 * The amount of Savings Plans utilization (in hours).
 */
export declare class SavingsPlansUtilizationByTime extends SpeakeasyBase {
    amortizedCommitment?: SavingsPlansAmortizedCommitment;
    savings?: SavingsPlansSavings;
    /**
     * The time period of the request.
     */
    timePeriod: DateInterval;
    utilization: SavingsPlansUtilization;
}
