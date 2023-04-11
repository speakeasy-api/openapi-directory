import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserLockout } from "./userlockout";
/**
 * Request model for updating login password policies
 */
export declare class UpdateLoginPasswordPolicies extends SpeakeasyBase {
    /**
     * Password character rules
     */
    characterRules?: CharacterRules;
    /**
     * &#128679; Deprecated since v4.24.0
     *
     * @remarks
     *
     * Determines whether a login password change should be enforced for all users
     *
     * Only takes effect, if login password policies get stricter
     */
    enforceLoginPasswordChange?: boolean;
    /**
     * Minimum number of characters a password must contain
     */
    minLength?: number;
    /**
     * Number of passwords to archive
     *
     * @remarks
     *
     * (must be between `0` and `10`; `0` means that password history is disabled)
     */
    numberOfArchivedPasswords?: number;
    /**
     * Password expiration information
     */
    passwordExpiration?: PasswordExpiration;
    /**
     * Determines whether a password must NOT contain word(s) from a dictionary
     */
    rejectDictionaryWords?: boolean;
    /**
     * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
     *
     * @remarks
     *
     * (min. 4 character pattern)
     */
    rejectKeyboardPatterns?: boolean;
    /**
     * Determines whether a password must NOT contain user info (first name, last name, email, user name)
     */
    rejectUserInfo?: boolean;
    /**
     * User lockout information
     */
    userLockout?: UserLockout;
}
