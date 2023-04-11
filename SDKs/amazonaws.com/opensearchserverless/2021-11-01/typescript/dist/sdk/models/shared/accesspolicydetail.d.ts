import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyTypeEnum } from "./accesspolicytypeenum";
/**
 * Details about an OpenSearch Serverless access policy.
 */
export declare class AccessPolicyDetail extends SpeakeasyBase {
    createdDate?: number;
    description?: string;
    lastModifiedDate?: number;
    name?: string;
    policy?: Record<string, any>;
    policyVersion?: string;
    type?: AccessPolicyTypeEnum;
}
