import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an OpenID Connect (OIDC) configuration.
 */
export declare class OpenIDConnectConfig extends SpeakeasyBase {
    authTTL?: number;
    clientId?: string;
    iatTTL?: number;
    issuer: string;
}
