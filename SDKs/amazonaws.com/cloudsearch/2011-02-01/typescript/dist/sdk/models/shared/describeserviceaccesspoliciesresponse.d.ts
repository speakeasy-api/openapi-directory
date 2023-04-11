import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";
/**
 * A response message that contains the access policies for a domain.
 */
export declare class DescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
    /**
     * A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
     */
    accessPolicies: AccessPoliciesStatus;
}
