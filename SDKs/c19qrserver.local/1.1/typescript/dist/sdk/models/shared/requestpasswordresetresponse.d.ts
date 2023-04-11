import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This object contains the password reset code for the user
 */
export declare class RequestPasswordResetResponse extends SpeakeasyBase {
    /**
     * The user's email address
     */
    email?: string;
    /**
     * The password reset code
     */
    guid?: string;
}
