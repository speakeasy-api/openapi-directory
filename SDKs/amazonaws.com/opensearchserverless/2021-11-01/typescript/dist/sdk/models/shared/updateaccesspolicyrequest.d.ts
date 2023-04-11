import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyTypeEnum } from "./accesspolicytypeenum";
export declare class UpdateAccessPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    policy?: string;
    policyVersion: string;
    type: AccessPolicyTypeEnum;
}
