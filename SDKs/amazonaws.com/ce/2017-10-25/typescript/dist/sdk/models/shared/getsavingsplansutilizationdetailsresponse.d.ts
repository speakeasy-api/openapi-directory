import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { SavingsPlansUtilizationAggregates } from "./savingsplansutilizationaggregates";
import { SavingsPlansUtilizationDetail } from "./savingsplansutilizationdetail";
/**
 * Success
 */
export declare class GetSavingsPlansUtilizationDetailsResponse extends SpeakeasyBase {
    nextToken?: string;
    savingsPlansUtilizationDetails: SavingsPlansUtilizationDetail[];
    /**
     * The time period of the request.
     */
    timePeriod: DateInterval;
    total?: SavingsPlansUtilizationAggregates;
}
