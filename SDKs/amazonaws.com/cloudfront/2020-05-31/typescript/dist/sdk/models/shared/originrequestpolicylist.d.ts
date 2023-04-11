import { SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicySummaryList } from "./originrequestpolicysummarylist";
/**
 * A list of origin request policies.
 */
export declare class OriginRequestPolicyList extends SpeakeasyBase {
    items?: OriginRequestPolicySummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
