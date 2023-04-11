import { SpeakeasyBase } from "../../../internal/utils";
import { SamlStatusEnumEnum } from "./samlstatusenumenum";
/**
 * Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
 */
export declare class SamlProperties extends SpeakeasyBase {
    relayStateParameterName?: string;
    status?: SamlStatusEnumEnum;
    userAccessUrl?: string;
}
