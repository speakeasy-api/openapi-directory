import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *  API for Extract sheets
 */
export declare class ServiceMediaTabularExtractsheet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * API for Extract sheets
     *
     * @remarks
     * API to call: Extract sheets
     */
    mediaTabularExtractsheet(req: operations.MediaTabularExtractsheetRequest, config?: AxiosRequestConfig): Promise<operations.MediaTabularExtractsheetResponse>;
}
