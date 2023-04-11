import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlansAmortizedCommitment } from "./savingsplansamortizedcommitment";
import { SavingsPlansSavings } from "./savingsplanssavings";
import { SavingsPlansUtilization } from "./savingsplansutilization";
/**
 * A single daily or monthly Savings Plans utilization rate and details for your account. A management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values.
 */
export declare class SavingsPlansUtilizationDetail extends SpeakeasyBase {
    amortizedCommitment?: SavingsPlansAmortizedCommitment;
    attributes?: Record<string, string>;
    savings?: SavingsPlansSavings;
    savingsPlanArn?: string;
    utilization?: SavingsPlansUtilization;
}
