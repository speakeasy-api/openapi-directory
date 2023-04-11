import { SpeakeasyBase } from "../../../internal/utils";
import { SchedulingPolicyListingDetail } from "./schedulingpolicylistingdetail";
/**
 * Success
 */
export declare class ListSchedulingPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    schedulingPolicies?: SchedulingPolicyListingDetail[];
}
