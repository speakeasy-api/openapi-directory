import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDataError } from "./metricdataerror";
import { MetricDataResult } from "./metricdataresult";
/**
 * Represents the result of processing your metric data batch request
 */
export declare class BatchGetMetricDataResponse extends SpeakeasyBase {
    errors?: MetricDataError[];
    results?: MetricDataResult[];
}
