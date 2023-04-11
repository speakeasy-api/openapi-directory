import { BankAccount } from "./bankaccount";
import { Currency } from "./currency";
import { Document } from "./document";
import { DocumentBlock } from "./documentblock";
import * as shared from "./models/shared";
import { Organization } from "./organization";
import { Partner } from "./partner";
import { Product } from "./product";
import { Util } from "./util";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.billingo.hu/v3"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * This is a Billingo API v3 documentation. Our API based on REST software architectural style. API has resource-oriented URLs, accepts JSON-encoded request bodies and returns JSON-encoded responses. To use this API you have to generate a new API key on our [site](https://app.billingo.hu/api-key). After that, you can test your API key on this page.
 *
 * @see {@link https://support.billingo.hu/content/446136358} - Find out more information about Billingo API v3 usage.
 */
export declare class SDK {
    /**
     * BankAccount object represents your bank account information.
     */
    bankAccount: BankAccount;
    currency: Currency;
    /**
     * Document object represents your invoice.
     */
    document: Document;
    /**
     * DocumentBlock object represents your invoice pad.
     */
    documentBlock: DocumentBlock;
    organization: Organization;
    /**
     * Partner object represents your client.
     */
    partner: Partner;
    /**
     * Product object represents your document's product.
     */
    product: Product;
    util: Util;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
