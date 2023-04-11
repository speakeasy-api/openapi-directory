import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyTypeEnum } from "./accesspolicytypeenum";
export declare class CreateAccessPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    policy: string;
    type: AccessPolicyTypeEnum;
}
