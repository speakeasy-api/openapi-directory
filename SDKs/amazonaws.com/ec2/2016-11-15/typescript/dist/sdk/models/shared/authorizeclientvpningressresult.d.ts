import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the authorization rule.
 */
export declare enum AuthorizeClientVpnIngressResultStatusCodeEnum {
    Authorizing = "authorizing",
    Active = "active",
    Failed = "failed",
    Revoking = "revoking"
}
/**
 * The current state of the authorization rule.
 */
export declare class AuthorizeClientVpnIngressResultStatus extends SpeakeasyBase {
    code?: AuthorizeClientVpnIngressResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class AuthorizeClientVpnIngressResult extends SpeakeasyBase {
    status?: AuthorizeClientVpnIngressResultStatus;
}
