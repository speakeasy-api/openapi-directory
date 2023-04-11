import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeries } from "./timeseries";
/**
 * Success
 */
export declare class ListAnomalyGroupTimeSeriesResponse extends SpeakeasyBase {
    anomalyGroupId?: string;
    metricName?: string;
    nextToken?: string;
    timeSeriesList?: TimeSeries[];
    timestampList?: string[];
}
