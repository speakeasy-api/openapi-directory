import { SpeakeasyBase } from "../../../internal/utils";
import { SweepConfigurationInput } from "./sweepconfiguration";
/**
 * The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **Active**.
 *
 * @remarks
 *
 * Possible values: **Active**, **Inactive**, **Closed**, **Suspended**.
 */
export declare enum BalanceAccountUpdateRequestStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Inactive = "Inactive",
    Suspended = "Suspended"
}
export declare class BalanceAccountUpdateRequestInput extends SpeakeasyBase {
    /**
     * The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.
     */
    accountHolderId?: string;
    /**
     * The default currency code of this balance account, in three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) format.
     *
     * @remarks
     * The default value is **EUR**.
     */
    defaultCurrencyCode?: string;
    /**
     * A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.
     */
    description?: string;
    /**
     * Your reference to the balance account, maximum 150 characters.
     */
    reference?: string;
    /**
     * The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **Active**.
     *
     * @remarks
     *
     * Possible values: **Active**, **Inactive**, **Closed**, **Suspended**.
     */
    status?: BalanceAccountUpdateRequestStatusEnum;
    /**
     * Contains key-value pairs that specify [balance sweep per currency code](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__reqParam_sweepConfigurations).
     *
     * @remarks
     *
     * You can update the balance account to add, update, or delete sweeps.
     *
     * * To add a sweep, send the currency code as a key and the configuration as the object.
     *
     *  * To update a sweep, send the whole configuration with your updates.
     *
     * * To delete a sweep, set the value to **null**. For example, `"EUR": null`.
     */
    sweepConfigurations?: Record<string, SweepConfigurationInput>;
    /**
     * The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.
     *
     * @remarks
     * Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
     */
    timeZone?: string;
}
