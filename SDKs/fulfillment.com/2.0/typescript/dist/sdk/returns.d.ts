import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Returns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Returns
     *
     * @remarks
     * Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.
     */
    getReturns(req: operations.GetReturnsRequest, security: operations.GetReturnsSecurity, config?: AxiosRequestConfig): Promise<operations.GetReturnsResponse>;
    /**
     * Inform us of an RMA
     *
     * @remarks
     * Inform FDC of an expected return.
     */
    putReturns(req: operations.PutReturnsRmaRequestV2, security: operations.PutReturnsSecurity, config?: AxiosRequestConfig): Promise<operations.PutReturnsResponse>;
}
