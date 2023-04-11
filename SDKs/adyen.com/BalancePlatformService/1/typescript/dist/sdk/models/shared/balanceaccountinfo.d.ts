import { SpeakeasyBase } from "../../../internal/utils";
import { SweepConfigurationInput } from "./sweepconfiguration";
export declare class BalanceAccountInfoInput extends SpeakeasyBase {
    /**
     * The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.
     */
    accountHolderId: string;
    /**
     * The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.
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
     * Your reference for the balance account, maximum 150 characters.
     */
    reference?: string;
    /**
     * Contains key-value pairs that specify configurations for balance sweeps per currency code. A sweep pulls in or pushes out funds based on a defined schedule, amount, and a source (for pulling funds) or a destination (for pushing funds).
     *
     * @remarks
     *
     * The key must be a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**. The value must be an object containing the sweep configuration.
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
