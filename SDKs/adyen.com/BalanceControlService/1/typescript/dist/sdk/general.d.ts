import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Start a balance transfer
     *
     * @remarks
     * Starts a balance transfer request between merchant accounts. The following conditions must be met before you can successfully transfer balances:
     *
     * * The source and destination merchant accounts must be under the same company account and legal entity.
     *
     * * The source merchant account must have sufficient funds.
     *
     * * The source and destination merchant accounts must have at least one common processing currency.
     *
     * When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.
     *
     */
    postBalanceTransfer(req: shared.BalanceTransferRequest, security: operations.PostBalanceTransferSecurity, config?: AxiosRequestConfig): Promise<operations.PostBalanceTransferResponse>;
}
