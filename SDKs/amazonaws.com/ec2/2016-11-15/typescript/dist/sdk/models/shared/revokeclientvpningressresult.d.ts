import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the authorization rule.
**/
export declare class RevokeClientVpnIngressResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class RevokeClientVpnIngressResult extends SpeakeasyBase {
    status?: RevokeClientVpnIngressResultStatus;
}
