import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlansUtilizationAggregates } from "./savingsplansutilizationaggregates";
import { SavingsPlansUtilizationByTime } from "./savingsplansutilizationbytime";
/**
 * Success
 */
export declare class GetSavingsPlansUtilizationResponse extends SpeakeasyBase {
    savingsPlansUtilizationsByTime?: SavingsPlansUtilizationByTime[];
    total: SavingsPlansUtilizationAggregates;
}
