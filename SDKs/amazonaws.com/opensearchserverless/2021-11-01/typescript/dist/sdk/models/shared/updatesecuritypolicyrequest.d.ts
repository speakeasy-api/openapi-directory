import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyTypeEnum } from "./securitypolicytypeenum";
export declare class UpdateSecurityPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    policy?: string;
    policyVersion: string;
    type: SecurityPolicyTypeEnum;
}
