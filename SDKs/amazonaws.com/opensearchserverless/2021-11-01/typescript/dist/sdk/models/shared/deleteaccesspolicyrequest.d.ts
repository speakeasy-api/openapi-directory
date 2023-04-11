import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyTypeEnum } from "./accesspolicytypeenum";
export declare class DeleteAccessPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    name: string;
    type: AccessPolicyTypeEnum;
}
