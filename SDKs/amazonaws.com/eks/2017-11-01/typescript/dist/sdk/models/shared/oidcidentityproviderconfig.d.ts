import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigStatusEnum } from "./configstatusenum";
/**
 * An object that represents the configuration for an OpenID Connect (OIDC) identity provider.
**/
export declare class OidcIdentityProviderConfig extends SpeakeasyBase {
    clientId?: string;
    clusterName?: string;
    groupsClaim?: string;
    groupsPrefix?: string;
    identityProviderConfigArn?: string;
    identityProviderConfigName?: string;
    issuerUrl?: string;
    requiredClaims?: Record<string, string>;
    status?: ConfigStatusEnum;
    tags?: Record<string, string>;
    usernameClaim?: string;
    usernamePrefix?: string;
}
