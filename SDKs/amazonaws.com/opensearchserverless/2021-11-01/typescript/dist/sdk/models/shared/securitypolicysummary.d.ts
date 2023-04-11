import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyTypeEnum } from "./securitypolicytypeenum";
/**
 * A summary of a security policy for OpenSearch Serverless.
 */
export declare class SecurityPolicySummary extends SpeakeasyBase {
    createdDate?: number;
    description?: string;
    lastModifiedDate?: number;
    name?: string;
    policyVersion?: string;
    type?: SecurityPolicyTypeEnum;
}
