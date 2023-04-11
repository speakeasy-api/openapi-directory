import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The three letter code for the currency - either `EUR` or `GBP`.
 */
export declare enum GetAccountsAccountsAccountCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
/**
 * The currency.
 */
export declare class GetAccountsAccountsAccountCurrency extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    code?: GetAccountsAccountsAccountCurrencyCodeEnum;
    /**
     * The name of the currency
     */
    description?: string;
}
/**
 * Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.
 */
export declare enum GetAccountsAccountsAccountStatusEnum {
    Live = "LIVE",
    BrexitMigrated = "BREXIT_MIGRATED"
}
export declare class GetAccountsAccountsAccount extends SpeakeasyBase {
    /**
     * the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).
     */
    balance?: number;
    /**
     * the BIC of the account (provided if currency is EUR).
     */
    cbic?: string;
    /**
     * the Account Number of the account.
     */
    ccan?: string;
    /**
     * the IBAN of the account (provided if currency is EUR).
     */
    ciban?: string;
    /**
     * the Sort Code of the account.
     */
    cnsc?: string;
    /**
     * Internal Use
     */
    colour?: string;
    /**
     * The currency.
     */
    currency?: GetAccountsAccountsAccountCurrency;
    /**
     * true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees).
     */
    defaultAccount?: boolean;
    /**
     * Whether or not direct debits can be set up on this account.
     */
    directDebitsAllowed?: boolean;
    /**
     * Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned.
     */
    fopOnly?: boolean;
    /**
     * identifier for the fire.com account (assigned by fire.com)
     */
    ican?: number;
    /**
     * the name the user gives to the account to help them identify it.
     */
    name?: string;
    /**
     * Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.
     */
    status?: GetAccountsAccountsAccountStatusEnum;
}
/**
 * An array of account objects.
 */
export declare class GetAccountsAccounts extends SpeakeasyBase {
    accounts?: GetAccountsAccountsAccount[];
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of account objects.
     */
    accounts?: GetAccountsAccounts;
}
