import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Functions Service allows you view, create and manage your Cloud Functions.
 */
export declare class Functions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Execution
     *
     * @remarks
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     */
    functionsCreateExecution(req: operations.FunctionsCreateExecutionRequest, security: operations.FunctionsCreateExecutionSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateExecutionResponse>;
    /**
     * Get Execution
     *
     * @remarks
     * Get a function execution log by its unique ID.
     */
    functionsGetExecution(req: operations.FunctionsGetExecutionRequest, security: operations.FunctionsGetExecutionSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsGetExecutionResponse>;
    /**
     * List Executions
     *
     * @remarks
     * Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).
     */
    functionsListExecutions(req: operations.FunctionsListExecutionsRequest, security: operations.FunctionsListExecutionsSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsListExecutionsResponse>;
}
