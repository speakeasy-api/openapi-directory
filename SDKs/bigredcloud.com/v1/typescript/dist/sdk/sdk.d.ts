import { Accounts } from "./accounts";
import { AnalysisCategories } from "./analysiscategories";
import { BankAccounts } from "./bankaccounts";
import { BookTranTypes } from "./booktrantypes";
import { CashPayments } from "./cashpayments";
import { CashReceipts } from "./cashreceipts";
import { CategoryTypes } from "./categorytypes";
import { CompanySettings } from "./companysettings";
import { CompanySetupConfig } from "./companysetupconfig";
import { Customers } from "./customers";
import { Email } from "./email";
import { OwnerTypeGroups } from "./ownertypegroups";
import { OwnerTypes } from "./ownertypes";
import { Payments } from "./payments";
import { Products } from "./products";
import { ProductTypes } from "./producttypes";
import { Purchases } from "./purchases";
import { Quote } from "./quote";
import { Sales } from "./sales";
import { SalesCreditNotes } from "./salescreditnotes";
import { SalesEntries } from "./salesentries";
import { SalesInvoices } from "./salesinvoices";
import { SalesRep } from "./salesrep";
import { Suppliers } from "./suppliers";
import { UserDefinedFields } from "./userdefinedfields";
import { VatAnalysisTypes } from "./vatanalysistypes";
import { VatCategories } from "./vatcategories";
import { VatRates } from "./vatrates";
import { VatTypes } from "./vattypes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://app.bigredcloud.com/api"];
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
 *
 * @remarks
 * <div style='line-height: 30px;'>
 *     <strong>Welcome to the Big Red Cloud API</strong><br/>
 *     This API enables programmatic access to Big Red Cloud data.<br/>
 *     We have used Swagger to auto generate the API documentation on this page, and it also enables direct interaction with the API in this page. <br/>
 *     To get started, you will require an API Key - check out our guide at <a target='_blank' href='https://www.bigredcloud.com/support/generating-api-key-guide/'>https://www.bigredcloud.com/support/generating-api-key-guide/</a> for information on how to get one. <br/>
 *     Use the  'Enter API Key' button below to enter your API key and start interacting with your Big Red Cloud data right on this page. <br/>
 *     The API key will be stored in your browsers local storage for convenience, but you will be able to delete it at any time if you wish. <br/>
 *     For additional information on the API, check out our support article at <a target='_blank' href='https://www.bigredcloud.com/support/api/'>https://www.bigredcloud.com/support/api/</a><br/>
 * </div>
 */
export declare class SDK {
    accounts: Accounts;
    analysisCategories: AnalysisCategories;
    bankAccounts: BankAccounts;
    bookTranTypes: BookTranTypes;
    cashPayments: CashPayments;
    cashReceipts: CashReceipts;
    categoryTypes: CategoryTypes;
    companySettings: CompanySettings;
    companySetupConfig: CompanySetupConfig;
    customers: Customers;
    email: Email;
    ownerTypeGroups: OwnerTypeGroups;
    ownerTypes: OwnerTypes;
    payments: Payments;
    productTypes: ProductTypes;
    products: Products;
    purchases: Purchases;
    quote: Quote;
    sales: Sales;
    salesCreditNotes: SalesCreditNotes;
    salesEntries: SalesEntries;
    salesInvoices: SalesInvoices;
    salesRep: SalesRep;
    suppliers: Suppliers;
    userDefinedFields: UserDefinedFields;
    vatAnalysisTypes: VatAnalysisTypes;
    vatCategories: VatCategories;
    vatRates: VatRates;
    vatTypes: VatTypes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
