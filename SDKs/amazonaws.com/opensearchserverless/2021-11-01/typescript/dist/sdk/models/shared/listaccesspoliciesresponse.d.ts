import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicySummary } from "./accesspolicysummary";
/**
 * Success
 */
export declare class ListAccessPoliciesResponse extends SpeakeasyBase {
    accessPolicySummaries?: AccessPolicySummary[];
    nextToken?: string;
}
