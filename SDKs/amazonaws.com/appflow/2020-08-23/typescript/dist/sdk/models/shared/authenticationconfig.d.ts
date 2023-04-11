import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAuthConfig } from "./customauthconfig";
import { OAuth2Defaults } from "./oauth2defaults";
/**
 * Contains information about the authentication config that the connector supports.
 */
export declare class AuthenticationConfig extends SpeakeasyBase {
    customAuthConfigs?: CustomAuthConfig[];
    isApiKeyAuthSupported?: boolean;
    isBasicAuthSupported?: boolean;
    isCustomAuthSupported?: boolean;
    isOAuth2Supported?: boolean;
    oAuth2Defaults?: OAuth2Defaults;
}
