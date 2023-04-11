import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { Group } from "./group";
import { MetricValue } from "./metricvalue";
/**
 * The result that's associated with a time period.
 */
export declare class ResultByTime extends SpeakeasyBase {
    estimated?: boolean;
    groups?: Group[];
    timePeriod?: DateInterval;
    total?: Record<string, MetricValue>;
}
