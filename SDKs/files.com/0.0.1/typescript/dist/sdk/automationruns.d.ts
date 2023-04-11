import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about automation_runs
 */
export declare class AutomationRuns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Automation Runs
     *
     * @remarks
     * List Automation Runs
     */
    getAutomationRuns(req: operations.GetAutomationRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationRunsResponse>;
    /**
     * Show Automation Run
     *
     * @remarks
     * Show Automation Run
     */
    getAutomationRunsId(req: operations.GetAutomationRunsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationRunsIdResponse>;
}
