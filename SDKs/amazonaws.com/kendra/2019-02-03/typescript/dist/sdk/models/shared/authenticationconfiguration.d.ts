import { SpeakeasyBase } from "../../../internal/utils";
import { BasicAuthenticationConfiguration } from "./basicauthenticationconfiguration";
/**
 * Provides the configuration information to connect to websites that require user authentication.
 */
export declare class AuthenticationConfiguration extends SpeakeasyBase {
    basicAuthentication?: BasicAuthenticationConfiguration[];
}
