import { SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";
export declare class CreateMerchantUserRequest extends SpeakeasyBase {
    /**
     * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.
     */
    accountGroups?: string[];
    /**
     * Set of authn apps to add to this user
     */
    authnApps?: string[];
    /**
     * The email address of the user.
     */
    email: string;
    name: Name;
    /**
     * The list of [roles](https://docs.adyen.com/account/user-roles) for this user.
     */
    roles?: string[];
    /**
     * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.
     */
    timeZoneCode?: string;
    /**
     * The username for this user. Allowed length: 255 alphanumeric characters.
     */
    username: string;
}
