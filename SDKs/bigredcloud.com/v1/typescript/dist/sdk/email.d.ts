import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Email {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Sends a Statement email.
     * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
     */
    emailSendEmailStatement(req: shared.EmailStatementDto, config?: AxiosRequestConfig): Promise<operations.EmailSendEmailStatementResponse>;
    /**
     * Sends a Quote email.
     * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
     */
    emailSendQuote(req: shared.EmailQuoteDto, config?: AxiosRequestConfig): Promise<operations.EmailSendQuoteResponse>;
    /**
     * Sends a Sales Invoice email.
     * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.
     */
    emailSendSalesInvoice(req: shared.SalesInvoiceEmailInfoDto, config?: AxiosRequestConfig): Promise<operations.EmailSendSalesInvoiceResponse>;
}
