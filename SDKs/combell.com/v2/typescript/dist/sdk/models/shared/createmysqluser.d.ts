import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateMySqlUser extends SpeakeasyBase {
    /**
     * User name<br />
     *
     * @remarks
     * User names have to adhere to following rules:<br /><ul><li>Between 2-14 characters.</li><li>Must be a mix of letters and/or digits.</li><li>Must be lower cased.</li><li>Cannot contain spaces.</li></ul>
     */
    name?: string;
    /**
     * The password for the database user.<br />
     *
     * @remarks
     * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
     */
    password?: string;
}
