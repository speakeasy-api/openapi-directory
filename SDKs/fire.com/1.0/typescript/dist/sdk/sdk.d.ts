import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Api } from "./api";
import { Accounts } from "./accounts";
import { Authentication } from "./authentication";
import { Cards } from "./cards";
import { DirectDebits } from "./directdebits";
import { OpenBanking } from "./openbanking";
import { PayeeBankAccounts } from "./payeebankaccounts";
import { PaymentBatches } from "./paymentbatches";
import { Transactions } from "./transactions";
import { Users } from "./users";
export declare const ServerList: readonly ["https://api-preprod.fire.com/business/v1", "https://api.fire.com/business/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    api: Api;
    accounts: Accounts;
    authentication: Authentication;
    cards: Cards;
    directDebits: DirectDebits;
    openBanking: OpenBanking;
    payeeBankAccounts: PayeeBankAccounts;
    paymentBatches: PaymentBatches;
    transactions: Transactions;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
