import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyCredentials } from "./apikeycredentials";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { BasicAuthCredentials } from "./basicauthcredentials";
import { CustomAuthCredentials } from "./customauthcredentials";
import { OAuth2Credentials } from "./oauth2credentials";
/**
 * The connector-specific profile credentials that are required when using the custom connector.
 */
export declare class CustomConnectorProfileCredentials extends SpeakeasyBase {
    apiKey?: ApiKeyCredentials;
    authenticationType: AuthenticationTypeEnum;
    basic?: BasicAuthCredentials;
    custom?: CustomAuthCredentials;
    oauth2?: OAuth2Credentials;
}
