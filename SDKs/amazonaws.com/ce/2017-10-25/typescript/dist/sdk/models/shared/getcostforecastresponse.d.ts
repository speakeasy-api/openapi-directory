import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastResult } from "./forecastresult";
import { MetricValue } from "./metricvalue";
/**
 * Success
 */
export declare class GetCostForecastResponse extends SpeakeasyBase {
    forecastResultsByTime?: ForecastResult[];
    total?: MetricValue;
}
