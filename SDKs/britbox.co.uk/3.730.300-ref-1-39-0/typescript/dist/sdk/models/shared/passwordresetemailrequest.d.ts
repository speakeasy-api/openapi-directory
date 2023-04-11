import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Email address of account to request a password reset on.
 */
export declare class PasswordResetEmailRequest extends SpeakeasyBase {
    /**
     * The email address of the primary account profile to reset the password for.
     */
    email: string;
}
