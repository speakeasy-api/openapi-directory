import { SpeakeasyBase } from "../../../internal/utils";
import { Name2 } from "./name2";
export declare class UpdateMerchantUserRequest extends SpeakeasyBase {
    /**
     * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.
     */
    accountGroups?: string[];
    /**
     * Sets the status of the user to active (**true**) or inactive (**false**).
     */
    active?: boolean;
    /**
     * Set of authn apps to add to this user
     */
    authnAppsToAdd?: string[];
    /**
     * Set of authn apps to remove from this user
     */
    authnAppsToRemove?: string[];
    /**
     * The email address of the user.
     */
    email?: string;
    name?: Name2;
    /**
     * The list of [roles](https://docs.adyen.com/account/user-roles) for this user.
     */
    roles?: string[];
    /**
     * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.
     */
    timeZoneCode?: string;
}
