import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The add mailbox request.
 */
export declare class CreateMailboxRequest extends SpeakeasyBase {
    /**
     * Mail zone account id
     */
    accountId?: number;
    /**
     * E-mail address
     */
    emailAddress?: string;
    /**
     * The password for the mailbox.<br />
     *
     * @remarks
     * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
     */
    password?: string;
}
