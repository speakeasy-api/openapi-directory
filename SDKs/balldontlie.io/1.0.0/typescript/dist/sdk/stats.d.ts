import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * all stats (example parameters)
     *
     * @remarks
     * all stats (example parameters)
     */
    allStatsExampleParameters(req: operations.AllStatsExampleParametersRequest, config?: AxiosRequestConfig): Promise<operations.AllStatsExampleParametersResponse>;
}
