import { SpeakeasyBase } from "../../../internal/utils";
import { PutMetricsErrorCodeEnum } from "./putmetricserrorcodeenum";
/**
 * An error that occured when putting the metric data.
 */
export declare class BatchPutMetricsError extends SpeakeasyBase {
    code?: PutMetricsErrorCodeEnum;
    metricIndex?: number;
}
