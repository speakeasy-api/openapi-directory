import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyTypeEnum } from "./securitypolicytypeenum";
export declare class GetSecurityPolicyRequest extends SpeakeasyBase {
    name: string;
    type: SecurityPolicyTypeEnum;
}
