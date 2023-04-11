import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyTypeEnum } from "./securitypolicytypeenum";
export declare class CreateSecurityPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    policy: string;
    type: SecurityPolicyTypeEnum;
}
