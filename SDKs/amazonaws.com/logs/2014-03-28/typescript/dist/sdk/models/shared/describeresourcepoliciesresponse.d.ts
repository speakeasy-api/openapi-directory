import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicy } from "./resourcepolicy";
/**
 * Success
 */
export declare class DescribeResourcePoliciesResponse extends SpeakeasyBase {
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
    resourcePolicies?: ResourcePolicy[];
}
