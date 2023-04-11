import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateMySqlDatabase extends SpeakeasyBase {
    /**
     * The id of the account on which to create the database.
     */
    accountId?: number;
    /**
     * The name for the database. This will be prefixed during provisioning.
     *
     * @remarks
     * The provided name during creation will be different from the provisioned database name.
     */
    databaseName?: string;
    /**
     * The password for the database user.<br />
     *
     * @remarks
     * Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>
     */
    password?: string;
}
