import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BankAccountValidation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Validate a bank account
     *
     * @remarks
     * Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).
     */
    postValidateBankAccountIdentification(req: shared.BankAccountIdentificationValidationRequest, security: operations.PostValidateBankAccountIdentificationSecurity, config?: AxiosRequestConfig): Promise<operations.PostValidateBankAccountIdentificationResponse>;
}
