import { SpeakeasyBase } from "../../../internal/utils";
import { OAuth2Properties } from "./oauth2properties";
/**
 * The profile properties required by the custom connector.
 */
export declare class CustomConnectorProfileProperties extends SpeakeasyBase {
    /**
     * The OAuth 2.0 properties required for OAuth 2.0 authentication.
     */
    oAuth2Properties?: OAuth2Properties;
    profileProperties?: Record<string, string>;
}
