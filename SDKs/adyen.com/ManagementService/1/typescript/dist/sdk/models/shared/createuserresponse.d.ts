import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Name } from "./name";
/**
 * OK - the request has succeeded.
 */
export declare class CreateUserResponse extends SpeakeasyBase {
    links?: Links;
    /**
     * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.
     */
    accountGroups?: string[];
    /**
     * Indicates whether this user is active.
     */
    active?: boolean;
    /**
     * The email address of the user.
     */
    email: string;
    /**
     * The unique identifier of the user.
     */
    id: string;
    name?: Name;
    /**
     * The list of [roles](https://docs.adyen.com/account/user-roles) for this user.
     */
    roles: string[];
    /**
     * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.
     */
    timeZoneCode: string;
    /**
     * The username for this user.
     */
    username: string;
}
