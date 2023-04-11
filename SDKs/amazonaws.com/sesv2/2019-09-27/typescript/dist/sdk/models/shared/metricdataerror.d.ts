import { SpeakeasyBase } from "../../../internal/utils";
import { QueryErrorCodeEnum } from "./queryerrorcodeenum";
/**
 * An error corresponding to the unsuccessful processing of a single metric data query.
 */
export declare class MetricDataError extends SpeakeasyBase {
    code?: QueryErrorCodeEnum;
    id?: string;
    message?: string;
}
