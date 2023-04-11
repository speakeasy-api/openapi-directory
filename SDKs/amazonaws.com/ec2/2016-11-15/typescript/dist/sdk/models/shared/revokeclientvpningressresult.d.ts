import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the authorization rule.
 */
export declare enum RevokeClientVpnIngressResultStatusCodeEnum {
    Authorizing = "authorizing",
    Active = "active",
    Failed = "failed",
    Revoking = "revoking"
}
/**
 * The current state of the authorization rule.
 */
export declare class RevokeClientVpnIngressResultStatus extends SpeakeasyBase {
    code?: RevokeClientVpnIngressResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class RevokeClientVpnIngressResult extends SpeakeasyBase {
    status?: RevokeClientVpnIngressResultStatus;
}
