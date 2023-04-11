import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about clickwraps
 */
export declare class Clickwraps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Clickwrap
     *
     * @remarks
     * Delete Clickwrap
     */
    deleteClickwrapsId(req: operations.DeleteClickwrapsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClickwrapsIdResponse>;
    /**
     * List Clickwraps
     *
     * @remarks
     * List Clickwraps
     */
    getClickwraps(req: operations.GetClickwrapsRequest, config?: AxiosRequestConfig): Promise<operations.GetClickwrapsResponse>;
    /**
     * Show Clickwrap
     *
     * @remarks
     * Show Clickwrap
     */
    getClickwrapsId(req: operations.GetClickwrapsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetClickwrapsIdResponse>;
    /**
     * Update Clickwrap
     *
     * @remarks
     * Update Clickwrap
     */
    patchClickwrapsId(req: operations.PatchClickwrapsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchClickwrapsIdResponse>;
    /**
     * Create Clickwrap
     *
     * @remarks
     * Create Clickwrap
     */
    postClickwraps(req: operations.PostClickwrapsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostClickwrapsResponse>;
}
