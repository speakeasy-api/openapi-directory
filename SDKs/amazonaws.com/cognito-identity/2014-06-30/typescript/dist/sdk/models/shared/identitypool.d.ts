import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoIdentityProvider } from "./cognitoidentityprovider";
/**
 * An object representing an Amazon Cognito identity pool.
 */
export declare class IdentityPool extends SpeakeasyBase {
    allowClassicFlow?: boolean;
    allowUnauthenticatedIdentities: boolean;
    cognitoIdentityProviders?: CognitoIdentityProvider[];
    developerProviderName?: string;
    identityPoolId: string;
    identityPoolName: string;
    identityPoolTags?: Record<string, string>;
    openIdConnectProviderARNs?: string[];
    samlProviderARNs?: string[];
    supportedLoginProviders?: Record<string, string>;
}
