import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicySummary } from "./securitypolicysummary";
/**
 * Success
 */
export declare class ListSecurityPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    securityPolicySummaries?: SecurityPolicySummary[];
}
