import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyTypeEnum } from "./securitypolicytypeenum";
export declare class ListSecurityPoliciesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resource?: string[];
    type: SecurityPolicyTypeEnum;
}
