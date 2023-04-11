import { SpeakeasyBase } from "../../../internal/utils";
import { Balance } from "./balance";
import { PaymentInstrumentReference } from "./paymentinstrumentreference";
import { SweepConfiguration } from "./sweepconfiguration";
/**
 * The status of the balance account, set to **Active** by default.
 *
 * @remarks
 *
 */
export declare enum BalanceAccountStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Inactive = "Inactive",
    Suspended = "Suspended"
}
/**
 * OK - the request has succeeded.
 */
export declare class BalanceAccount extends SpeakeasyBase {
    /**
     * The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.
     */
    accountHolderId: string;
    /**
     * List of balances with the amount and currency.
     */
    balances?: Balance[];
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
     * The unique identifier of the balance account.
     */
    id: string;
    /**
     * List of [payment instruments](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments) associated with the balance account.
     */
    paymentInstruments?: PaymentInstrumentReference[];
    /**
     * Your reference for the balance account, maximum 150 characters.
     */
    reference?: string;
    /**
     * The status of the balance account, set to **Active** by default.
     *
     * @remarks
     *
     */
    status?: BalanceAccountStatusEnum;
    /**
     * Contains key-value pairs that specify configurations for balance sweeps per currency code. A sweep pulls in or pushes out funds based on a defined schedule, amount, and a source (for pulling funds) or a destination (for pushing funds).
     *
     * @remarks
     *
     * The key must be a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**. The value must be an object containing the sweep configuration.
     */
    sweepConfigurations?: Record<string, SweepConfiguration>;
    /**
     * The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.
     *
     * @remarks
     * Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
     */
    timeZone?: string;
}
