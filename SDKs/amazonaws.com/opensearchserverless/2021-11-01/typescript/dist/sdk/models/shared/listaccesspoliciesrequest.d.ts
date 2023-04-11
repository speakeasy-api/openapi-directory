import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyTypeEnum } from "./accesspolicytypeenum";
export declare class ListAccessPoliciesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resource?: string[];
    type: AccessPolicyTypeEnum;
}
