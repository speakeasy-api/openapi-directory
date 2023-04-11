import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyTypeEnum } from "./securitypolicytypeenum";
/**
 * Details about an OpenSearch Serverless security policy.
 */
export declare class SecurityPolicyDetail extends SpeakeasyBase {
    createdDate?: number;
    description?: string;
    lastModifiedDate?: number;
    name?: string;
    policy?: Record<string, any>;
    policyVersion?: string;
    type?: SecurityPolicyTypeEnum;
}
