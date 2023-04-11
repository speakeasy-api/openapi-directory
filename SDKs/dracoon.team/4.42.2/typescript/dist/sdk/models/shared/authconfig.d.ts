import { SpeakeasyBase } from "../../../internal/utils";
import { AuthMethod } from "./authmethod";
/**
 * Authentication settings
 */
export declare class AuthConfig extends SpeakeasyBase {
    /**
     * List of authentication methods
     */
    authMethods: AuthMethod[];
}
