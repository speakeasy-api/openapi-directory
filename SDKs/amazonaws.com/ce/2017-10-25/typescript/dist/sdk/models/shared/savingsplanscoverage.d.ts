import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { SavingsPlansCoverageData } from "./savingsplanscoveragedata";
/**
 * The amount of Savings Plans eligible usage that's covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.
 */
export declare class SavingsPlansCoverage extends SpeakeasyBase {
    attributes?: Record<string, string>;
    coverage?: SavingsPlansCoverageData;
    /**
     * The time period of the request.
     */
    timePeriod?: DateInterval;
}
