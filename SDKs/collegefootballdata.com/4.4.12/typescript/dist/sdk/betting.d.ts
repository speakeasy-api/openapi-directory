import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Betting lines and data
 */
export declare class Betting {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Betting lines
     *
     * @remarks
     * Closing betting lines
     */
    getLines(req: operations.GetLinesRequest, config?: AxiosRequestConfig): Promise<operations.GetLinesResponse>;
}
