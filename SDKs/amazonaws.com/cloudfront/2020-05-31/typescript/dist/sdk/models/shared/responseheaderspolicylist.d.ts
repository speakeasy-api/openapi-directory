import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeadersPolicySummaryList } from "./responseheaderspolicysummarylist";
/**
 * A list of response headers policies.
 */
export declare class ResponseHeadersPolicyList extends SpeakeasyBase {
    items?: ResponseHeadersPolicySummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
