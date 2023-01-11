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
     * micer - Migration Certificate
     *
     * API to verify Migration Certificate.
    **/
    micer(req: operations.MicerRequest, config?: AxiosRequestConfig): Promise<operations.MicerResponse>;
    /**
     * pvcer - Provisional Certificate
     *
     * API to verify Provisional Certificate.
    **/
    pvcer(req: operations.PvcerRequest, config?: AxiosRequestConfig): Promise<operations.PvcerResponse>;
}
