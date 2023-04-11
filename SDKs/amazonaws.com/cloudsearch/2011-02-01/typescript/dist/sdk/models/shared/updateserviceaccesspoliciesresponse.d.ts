import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";
/**
 * A response message that contains the status of updated access policies.
 */
export declare class UpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
    /**
     * A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
     */
    accessPolicies: AccessPoliciesStatus;
}
