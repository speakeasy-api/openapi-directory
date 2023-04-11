import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the authorization rule.
 */
export declare enum DescribeClientVpnAuthorizationRulesResultAuthorizationRulesStatusCodeEnum {
    Authorizing = "authorizing",
    Active = "active",
    Failed = "failed",
    Revoking = "revoking"
}
/**
 * The current state of the authorization rule.
 */
export declare class DescribeClientVpnAuthorizationRulesResultAuthorizationRulesStatus extends SpeakeasyBase {
    code?: DescribeClientVpnAuthorizationRulesResultAuthorizationRulesStatusCodeEnum;
    message?: string;
}
/**
 * Information about an authorization rule.
 */
export declare class DescribeClientVpnAuthorizationRulesResultAuthorizationRules extends SpeakeasyBase {
    accessAll?: boolean;
    clientVpnEndpointId?: string;
    description?: string;
    destinationCidr?: string;
    groupId?: string;
    status?: DescribeClientVpnAuthorizationRulesResultAuthorizationRulesStatus;
}
/**
 * Success
 */
export declare class DescribeClientVpnAuthorizationRulesResult extends SpeakeasyBase {
    authorizationRules?: DescribeClientVpnAuthorizationRulesResultAuthorizationRules[];
    nextToken?: string;
}
