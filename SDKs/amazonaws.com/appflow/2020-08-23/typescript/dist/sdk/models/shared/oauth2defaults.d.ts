import { SpeakeasyBase } from "../../../internal/utils";
import { OAuth2CustomParameter } from "./oauth2customparameter";
import { OAuth2GrantTypeEnum } from "./oauth2granttypeenum";
/**
 * Contains the default values required for OAuth 2.0 authentication.
 */
export declare class OAuth2Defaults extends SpeakeasyBase {
    authCodeUrls?: string[];
    oauth2CustomProperties?: OAuth2CustomParameter[];
    oauth2GrantTypesSupported?: OAuth2GrantTypeEnum[];
    oauthScopes?: string[];
    tokenUrls?: string[];
}
