import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ITV reset token from email link and a new password.
 */
export declare class PasswordResetRequest extends SpeakeasyBase {
    /**
     * The new password for the account.
     */
    password: string;
    /**
     * The ITV reset token.
     */
    resetToken: string;
}
