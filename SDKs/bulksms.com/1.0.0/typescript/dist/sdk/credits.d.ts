import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Credits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Transfer credits to another account
     *
     * @remarks
     * Before you can use the transfer credits endpoint, the _credit-transfer facility_ must be activated for your account.  You can request activation from `support@bulksms.com`.
     *
     * The recipient must be an enabled account that uses the same currency as your account.
     *
     */
    postCreditTransfer(req: shared.TransferEntry, security: operations.PostCreditTransferSecurity, config?: AxiosRequestConfig): Promise<operations.PostCreditTransferResponse>;
}
