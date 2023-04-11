import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserInfo } from "./userinfo";
import { UserLockout } from "./userlockout";
/**
 * Login password policies
 */
export declare class LoginPasswordPolicies extends SpeakeasyBase {
    /**
     * Password character rules
     */
    characterRules: CharacterRules;
    /**
     * Minimum number of characters a password must contain
     */
    minLength: number;
    /**
     * Number of passwords to archive
     *
     * @remarks
     *
     * (must be between `0` and `10`; `0` means that password history is disabled)
     */
    numberOfArchivedPasswords: number;
    /**
     * Password expiration information
     */
    passwordExpiration: PasswordExpiration;
    /**
     * Determines whether a password must NOT contain word(s) from a dictionary
     */
    rejectDictionaryWords: boolean;
    /**
     * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
     *
     * @remarks
     *
     * (min. 4 character pattern)
     */
    rejectKeyboardPatterns: boolean;
    /**
     * Determines whether a password must NOT contain user info (first name, last name, email, user name)
     */
    rejectUserInfo: boolean;
    /**
     * Modification date
     */
    updatedAt: Date;
    /**
     * User information
     */
    updatedBy: UserInfo;
    /**
     * User lockout information
     */
    userLockout: UserLockout;
}
