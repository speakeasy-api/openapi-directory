import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about styles
 */
export declare class Styles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Style
     *
     * @remarks
     * Delete Style
     */
    deleteStylesPath(req: operations.DeleteStylesPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStylesPathResponse>;
    /**
     * Show Style
     *
     * @remarks
     * Show Style
     */
    getStylesPath(req: operations.GetStylesPathRequest, config?: AxiosRequestConfig): Promise<operations.GetStylesPathResponse>;
    /**
     * Update Style
     *
     * @remarks
     * Update Style
     */
    patchStylesPath(req: operations.PatchStylesPathRequest, config?: AxiosRequestConfig): Promise<operations.PatchStylesPathResponse>;
}
