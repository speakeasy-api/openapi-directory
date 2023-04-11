import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyTypeEnum } from "./securitypolicytypeenum";
export declare class DeleteSecurityPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    name: string;
    type: SecurityPolicyTypeEnum;
}
