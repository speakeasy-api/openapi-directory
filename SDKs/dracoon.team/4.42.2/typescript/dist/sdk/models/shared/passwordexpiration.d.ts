import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Password expiration information
 */
export declare class PasswordExpiration extends SpeakeasyBase {
    /**
     * Determines whether password expiration is enabled
     */
    enabled: boolean;
    /**
     * Maximum allowed password age (in days)
     */
    maxPasswordAge?: number;
}
