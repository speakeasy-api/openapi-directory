import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
/**
 * The forecast that's created for your query.
 */
export declare class ForecastResult extends SpeakeasyBase {
    meanValue?: string;
    predictionIntervalLowerBound?: string;
    predictionIntervalUpperBound?: string;
    timePeriod?: DateInterval;
}
