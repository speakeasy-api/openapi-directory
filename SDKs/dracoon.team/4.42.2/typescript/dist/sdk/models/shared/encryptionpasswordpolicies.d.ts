import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { UserInfo } from "./userinfo";
/**
 * Encryption password policies
 */
export declare class EncryptionPasswordPolicies extends SpeakeasyBase {
    /**
     * Password character rules
     */
    characterRules?: CharacterRules;
    /**
     * Minimum number of characters a password must contain
     */
    minLength?: number;
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
     * Modification date
     */
    updatedAt?: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
}
