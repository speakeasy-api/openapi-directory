import { AccountHolders } from "./accountholders";
import { BalanceAccounts } from "./balanceaccounts";
import { BankAccountValidation } from "./bankaccountvalidation";
import { Documents } from "./documents";
import { LegalEntities } from "./legalentities";
import { PaymentInstrumentGroups } from "./paymentinstrumentgroups";
import { PaymentInstruments } from "./paymentinstruments";
import { Platform } from "./platform";
import { TransactionRules } from "./transactionrules";
import { TransferInstruments } from "./transferinstruments";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://balanceplatform-api-test.adyen.com/bcl/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Configuration API enables you to create a platform where you can onboard your users as account holders and create balance accounts, cards, and business accounts.
 *
 * @remarks
 *
 * ## Authentication
 * Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic authentication. For example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -U "ws@BalancePlatform.YOUR_BALANCE_PLATFORM":"YOUR_WS_PASSWORD" \
 * ...
 * ```
 * ## Versioning
 * The Configuration API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://balanceplatform-api-test.adyen.com/bcl/v1/accountHolders
 * ```
 * ## Going live
 * When going live, your Adyen contact will provide your API credential for the live environment. You can then use the API key or the username and password to send requests to `https://balanceplatform-api-live.adyen.com/bcl/v1`.
 */
export declare class SDK {
    accountHolders: AccountHolders;
    balanceAccounts: BalanceAccounts;
    bankAccountValidation: BankAccountValidation;
    documents: Documents;
    legalEntities: LegalEntities;
    paymentInstrumentGroups: PaymentInstrumentGroups;
    paymentInstruments: PaymentInstruments;
    platform: Platform;
    transactionRules: TransactionRules;
    transferInstruments: TransferInstruments;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
