import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the authorization rule.
**/
export declare class AuthorizeClientVpnIngressResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class AuthorizeClientVpnIngressResult extends SpeakeasyBase {
    status?: AuthorizeClientVpnIngressResultStatus;
}
