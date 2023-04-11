import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Recover usernames for email
 */
export declare class RecoverUserNameRequest extends SpeakeasyBase {
    /**
     * IETF language tag
     */
    creatorLanguage?: string;
    /**
     * Email
     */
    email: string;
}
