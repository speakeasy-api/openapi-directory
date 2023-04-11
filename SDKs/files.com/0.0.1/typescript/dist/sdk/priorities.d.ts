import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about priorities
 */
export declare class Priorities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Priorities
     *
     * @remarks
     * List Priorities
     */
    getPriorities(req: operations.GetPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetPrioritiesResponse>;
}
