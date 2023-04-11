import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The new account password & ITV profile token.
 */
export declare class ChangePasswordRequest extends SpeakeasyBase {
    /**
     * The new password for the account.
     */
    password: string;
    /**
     * The ITV profile token.
     */
    profileToken: string;
}
