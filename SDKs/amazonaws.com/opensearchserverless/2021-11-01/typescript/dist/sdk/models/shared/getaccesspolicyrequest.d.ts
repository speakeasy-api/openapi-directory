import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyTypeEnum } from "./accesspolicytypeenum";
export declare class GetAccessPolicyRequest extends SpeakeasyBase {
    name: string;
    type: AccessPolicyTypeEnum;
}
