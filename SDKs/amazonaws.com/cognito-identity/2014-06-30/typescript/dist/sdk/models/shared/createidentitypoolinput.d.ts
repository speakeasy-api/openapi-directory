import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoIdentityProvider } from "./cognitoidentityprovider";
/**
 * Input to the CreateIdentityPool action.
**/
export declare class CreateIdentityPoolInput extends SpeakeasyBase {
    allowClassicFlow?: boolean;
    allowUnauthenticatedIdentities: boolean;
    cognitoIdentityProviders?: CognitoIdentityProvider[];
    developerProviderName?: string;
    identityPoolName: string;
    identityPoolTags?: Record<string, string>;
    openIdConnectProviderARNs?: string[];
    samlProviderARNs?: string[];
    supportedLoginProviders?: Record<string, string>;
}
