import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyTypeEnum } from "./accesspolicytypeenum";
/**
 * A summary of the data access policy.
 */
export declare class AccessPolicySummary extends SpeakeasyBase {
    createdDate?: number;
    description?: string;
    lastModifiedDate?: number;
    name?: string;
    policyVersion?: string;
    type?: AccessPolicyTypeEnum;
}
