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
     * Create Function
     *
     * @remarks
     * Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     */
    functionsCreate(req: operations.FunctionsCreateRequestBody, security: operations.FunctionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateResponse>;
    /**
     * Create Execution
     *
     * @remarks
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     */
    functionsCreateExecution(req: operations.FunctionsCreateExecutionRequest, security: operations.FunctionsCreateExecutionSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateExecutionResponse>;
    /**
     * Create Tag
     *
     * @remarks
     * Create a new function code tag. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's tag to use your new tag UID.
     *
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).
     *
     * Use the "command" param to set the entry point used to execute your code.
     */
    functionsCreateTag(req: operations.FunctionsCreateTagRequest, security: operations.FunctionsCreateTagSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateTagResponse>;
    /**
     * Delete Function
     *
     * @remarks
     * Delete a function by its unique ID.
     */
    functionsDelete(req: operations.FunctionsDeleteRequest, security: operations.FunctionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsDeleteResponse>;
    /**
     * Delete Tag
     *
     * @remarks
     * Delete a code tag by its unique ID.
     */
    functionsDeleteTag(req: operations.FunctionsDeleteTagRequest, security: operations.FunctionsDeleteTagSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsDeleteTagResponse>;
    /**
     * Get Function
     *
     * @remarks
     * Get a function by its unique ID.
     */
    functionsGet(req: operations.FunctionsGetRequest, security: operations.FunctionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsGetResponse>;
    /**
     * Get Execution
     *
     * @remarks
     * Get a function execution log by its unique ID.
     */
    functionsGetExecution(req: operations.FunctionsGetExecutionRequest, security: operations.FunctionsGetExecutionSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsGetExecutionResponse>;
    /**
     * Get Tag
     *
     * @remarks
     * Get a code tag by its unique ID.
     */
    functionsGetTag(req: operations.FunctionsGetTagRequest, security: operations.FunctionsGetTagSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsGetTagResponse>;
    /**
     * List Functions
     *
     * @remarks
     * Get a list of all the project's functions. You can use the query params to filter your results.
     */
    functionsList(req: operations.FunctionsListRequest, security: operations.FunctionsListSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsListResponse>;
    /**
     * List Executions
     *
     * @remarks
     * Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).
     */
    functionsListExecutions(req: operations.FunctionsListExecutionsRequest, security: operations.FunctionsListExecutionsSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsListExecutionsResponse>;
    /**
     * List Tags
     *
     * @remarks
     * Get a list of all the project's code tags. You can use the query params to filter your results.
     */
    functionsListTags(req: operations.FunctionsListTagsRequest, security: operations.FunctionsListTagsSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsListTagsResponse>;
    /**
     * Update Function
     *
     * @remarks
     * Update function by its unique ID.
     */
    functionsUpdate(req: operations.FunctionsUpdateRequest, security: operations.FunctionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsUpdateResponse>;
    /**
     * Update Function Tag
     *
     * @remarks
     * Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.
     */
    functionsUpdateTag(req: operations.FunctionsUpdateTagRequest, security: operations.FunctionsUpdateTagSecurity, config?: AxiosRequestConfig): Promise<operations.FunctionsUpdateTagResponse>;
}
