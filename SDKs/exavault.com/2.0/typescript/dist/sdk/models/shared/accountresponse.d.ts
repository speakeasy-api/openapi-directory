import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { User } from "./user";
/**
 * Successful operation
 */
export declare class AccountResponse extends SpeakeasyBase {
    /**
     * Object contains all account properties.
     */
    data?: Account;
    /**
     * Array can contain objects specified in include param of the get call e.g User object
     */
    included?: User[];
    responseStatus?: number;
}
