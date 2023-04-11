import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Util {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Convert legacy ID to v3 ID.
     *
     * @remarks
     * Retrieves the API v3 ID.
     */
    getId(req: operations.GetIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIdResponse>;
}
