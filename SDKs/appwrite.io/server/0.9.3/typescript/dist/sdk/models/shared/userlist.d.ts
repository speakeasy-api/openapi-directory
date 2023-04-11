import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Users List
 */
export declare class UserList extends SpeakeasyBase {
    /**
     * Total sum of items in the list.
     */
    sum: number;
    /**
     * List of users.
     */
    users: User[];
}
