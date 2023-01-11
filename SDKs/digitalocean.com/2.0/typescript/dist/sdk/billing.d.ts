import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCustomerBalance - Get Customer Balance
     *
     * To retrieve the balances on a customer's account, send a GET request to `/v2/customers/my/balance`.
    **/
    getCustomerBalance(config?: AxiosRequestConfig): Promise<operations.GetCustomerBalanceResponse>;
    /**
     * getInvoiceByUuid - Retrieve an Invoice by UUID
     *
     * To retrieve the invoice items for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID`.
    **/
    getInvoiceByUuid(req: operations.GetInvoiceByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceByUuidResponse>;
    /**
     * getInvoiceCsvByUuid - Retrieve an Invoice CSV by UUID
     *
     * To retrieve a CSV for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/csv`.
    **/
    getInvoiceCsvByUuid(req: operations.GetInvoiceCsvByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceCsvByUuidResponse>;
    /**
     * getInvoicePdfByUuid - Retrieve an Invoice PDF by UUID
     *
     * To retrieve a PDF for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/pdf`.
    **/
    getInvoicePdfByUuid(req: operations.GetInvoicePdfByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicePdfByUuidResponse>;
    /**
     * getInvoiceSummaryByUuid - Retrieve an Invoice Summary by UUID
     *
     * To retrieve a summary for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/summary`.
    **/
    getInvoiceSummaryByUuid(req: operations.GetInvoiceSummaryByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceSummaryByUuidResponse>;
    /**
     * listBillingHistory - List Billing History
     *
     * To retrieve a list of all billing history entries, send a GET request to `/v2/customers/my/billing_history`.
    **/
    listBillingHistory(config?: AxiosRequestConfig): Promise<operations.ListBillingHistoryResponse>;
    /**
     * listInvoices - List All Invoices
     *
     * To retrieve a list of all invoices, send a GET request to `/v2/customers/my/invoices`.
    **/
    listInvoices(config?: AxiosRequestConfig): Promise<operations.ListInvoicesResponse>;
}
