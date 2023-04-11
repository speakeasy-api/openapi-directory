import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about history_exports
 */
export declare class HistoryExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show History Export
     *
     * @remarks
     * Show History Export
     */
    getHistoryExportsId(req: operations.GetHistoryExportsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetHistoryExportsIdResponse>;
    /**
     * Create History Export
     *
     * @remarks
     * Create History Export
     */
    postHistoryExports(req: operations.PostHistoryExportsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostHistoryExportsResponse>;
}
