import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for an OIDC-based, user-identity type trust provider.
 */
export declare class CreateVerifiedAccessTrustProviderOidcOptions extends SpeakeasyBase {
    authorizationEndpoint?: string;
    clientId?: string;
    clientSecret?: string;
    issuer?: string;
    scope?: string;
    tokenEndpoint?: string;
    userInfoEndpoint?: string;
}
