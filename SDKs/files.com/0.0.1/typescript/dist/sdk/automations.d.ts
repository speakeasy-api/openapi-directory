import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about automations
 */
export declare class Automations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Automation
     *
     * @remarks
     * Delete Automation
     */
    deleteAutomationsId(req: operations.DeleteAutomationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationsIdResponse>;
    /**
     * List Automations
     *
     * @remarks
     * List Automations
     */
    getAutomations(req: operations.GetAutomationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationsResponse>;
    /**
     * Show Automation
     *
     * @remarks
     * Show Automation
     */
    getAutomationsId(req: operations.GetAutomationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationsIdResponse>;
    /**
     * Update Automation
     *
     * @remarks
     * Update Automation
     */
    patchAutomationsId(req: operations.PatchAutomationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAutomationsIdResponse>;
    /**
     * Create Automation
     *
     * @remarks
     * Create Automation
     */
    postAutomations(req: operations.PostAutomationsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAutomationsResponse>;
}
