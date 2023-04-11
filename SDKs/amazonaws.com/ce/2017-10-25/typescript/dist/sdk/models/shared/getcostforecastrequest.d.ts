import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { Expression } from "./expression";
import { GranularityEnum } from "./granularityenum";
import { MetricEnum } from "./metricenum";
export declare class GetCostForecastRequest extends SpeakeasyBase {
    filter?: Expression;
    granularity: GranularityEnum;
    metric: MetricEnum;
    predictionIntervalLevel?: number;
    timePeriod: DateInterval;
}
