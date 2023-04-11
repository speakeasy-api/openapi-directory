import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeadersPolicy } from "./responseheaderspolicy";
import { ResponseHeadersPolicyTypeEnum } from "./responseheaderspolicytypeenum";
/**
 * Contains a response headers policy.
 */
export declare class ResponseHeadersPolicySummaryList extends SpeakeasyBase {
    responseHeadersPolicy: ResponseHeadersPolicy;
    type: ResponseHeadersPolicyTypeEnum;
}
