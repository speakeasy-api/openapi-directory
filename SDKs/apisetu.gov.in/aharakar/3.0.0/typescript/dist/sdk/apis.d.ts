import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ratcr - Ration Card
     *
     * API to verify Ration Card.
    **/
    ratcr(req: operations.RatcrRequest, config?: AxiosRequestConfig): Promise<operations.RatcrResponse>;
}
