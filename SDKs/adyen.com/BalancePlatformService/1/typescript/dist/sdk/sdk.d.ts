import { AxiosInstance } from "axios";
import { AccountHolders } from "./accountholders";
import { BalanceAccounts } from "./balanceaccounts";
import { Documents } from "./documents";
import { General } from "./general";
import { LegalEntities } from "./legalentities";
import { PaymentInstrumentGroups } from "./paymentinstrumentgroups";
import { PaymentInstruments } from "./paymentinstruments";
import { TransactionRules } from "./transactionrules";
import { TransferInstruments } from "./transferinstruments";
export declare const ServerList: readonly ["https://balanceplatform-api-test.adyen.com/bcl/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accountHolders: AccountHolders;
    balanceAccounts: BalanceAccounts;
    documents: Documents;
    general: General;
    legalEntities: LegalEntities;
    paymentInstrumentGroups: PaymentInstrumentGroups;
    paymentInstruments: PaymentInstruments;
    transactionRules: TransactionRules;
    transferInstruments: TransferInstruments;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
