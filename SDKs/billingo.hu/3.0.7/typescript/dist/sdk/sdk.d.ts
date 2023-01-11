import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { BankAccount } from "./bankaccount";
import { Currency } from "./currency";
import { Document } from "./document";
import { DocumentBlock } from "./documentblock";
import { Organization } from "./organization";
import { Partner } from "./partner";
import { Product } from "./product";
import { Util } from "./util";
export declare const ServerList: readonly ["https://api.billingo.hu/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    bankAccount: BankAccount;
    currency: Currency;
    document: Document;
    documentBlock: DocumentBlock;
    organization: Organization;
    partner: Partner;
    product: Product;
    util: Util;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
