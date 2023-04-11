import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAccount extends SpeakeasyBase {
    /**
     * Ftp password for the account.<br />
     *
     * @remarks
     * Applies only if the servicepack contains hosting.<br />
     * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
     */
    ftpPassword?: string;
    /**
     * An identifier for the account.<br />
     *
     * @remarks
     * Should be a domain name for hosting accounts.
     */
    identifier?: string;
    /**
     * The servicepack id that defines the account.
     */
    servicepackId?: number;
}
