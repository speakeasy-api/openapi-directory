import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class MySqlDatabase extends SpeakeasyBase {
    /**
     * The account id for the database.
     */
    accountId?: number;
    /**
     * The actual size in MB for the database.
     */
    actualSize?: number;
    /**
     * Hostname
     */
    hostname?: string;
    /**
     * The maximim size in MB for the database.
     */
    maxSize?: number;
    /**
     * Database name
     */
    name?: string;
    /**
     * The number of users.
     */
    userCount?: number;
}
