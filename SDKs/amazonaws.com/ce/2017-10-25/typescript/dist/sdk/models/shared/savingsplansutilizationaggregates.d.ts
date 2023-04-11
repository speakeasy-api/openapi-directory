import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlansAmortizedCommitment } from "./savingsplansamortizedcommitment";
import { SavingsPlansSavings } from "./savingsplanssavings";
import { SavingsPlansUtilization } from "./savingsplansutilization";
/**
 * The aggregated utilization metrics for your Savings Plans usage.
 */
export declare class SavingsPlansUtilizationAggregates extends SpeakeasyBase {
    amortizedCommitment?: SavingsPlansAmortizedCommitment;
    savings?: SavingsPlansSavings;
    utilization: SavingsPlansUtilization;
}
