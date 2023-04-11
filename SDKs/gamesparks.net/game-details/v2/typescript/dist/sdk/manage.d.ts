import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage Restv 2 Controller
 */
export declare class Manage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * copySnapshotToExistingGame
     */
    copySnapshotToExistingGameUsingPOST(req: operations.CopySnapshotToExistingGameUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CopySnapshotToExistingGameUsingPOSTResponse>;
    /**
     * createQuery
     */
    createQueryUsingPOST(req: operations.CreateQueryUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateQueryUsingPOSTResponse>;
    /**
     * createScreen
     */
    createScreenUsingPOST(req: operations.CreateScreenUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateScreenUsingPOSTResponse>;
    /**
     * createSnapshot
     */
    createSnapshotUsingPOST(req: operations.CreateSnapshotUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnapshotUsingPOSTResponse>;
    /**
     * createSnippet
     */
    createSnippetUsingPOST(req: operations.CreateSnippetUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnippetUsingPOSTResponse>;
    /**
     * deleteQuery
     */
    deleteQueryUsingDELETE(req: operations.DELETEQueryUsingDELETERequest, config?: AxiosRequestConfig): Promise<operations.DELETEQueryUsingDELETEResponse>;
    /**
     * deleteScreen
     */
    deleteScreenUsingDELETE(req: operations.DELETEScreenUsingDELETERequest, config?: AxiosRequestConfig): Promise<operations.DELETEScreenUsingDELETEResponse>;
    /**
     * deleteSnapshot
     */
    deleteSnapshotUsingDELETE(req: operations.DELETESnapshotUsingDELETERequest, config?: AxiosRequestConfig): Promise<operations.DELETESnapshotUsingDELETEResponse>;
    /**
     * deleteSnippet
     */
    deleteSnippetUsingDELETE(req: operations.DELETESnippetUsingDELETERequest, config?: AxiosRequestConfig): Promise<operations.DELETESnippetUsingDELETEResponse>;
    /**
     * getQuery
     */
    getQueryUsingGET(req: operations.GETQueryUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETQueryUsingGETResponse>;
    /**
     * getScreen
     */
    getScreenUsingGET(req: operations.GETScreenUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETScreenUsingGETResponse>;
    /**
     * getSnippet
     */
    getSnippetUsingGET(req: operations.GETSnippetUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSnippetUsingGETResponse>;
    /**
     * listExecutableScreens
     */
    listExecutableScreensUsingGET(req: operations.ListExecutableScreensUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListExecutableScreensUsingGETResponse>;
    /**
     * listQueries
     */
    listQueriesUsingGET(req: operations.ListQueriesUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListQueriesUsingGETResponse>;
    /**
     * listScreens
     */
    listScreensUsingGET(req: operations.ListScreensUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListScreensUsingGETResponse>;
    /**
     * listSnapshots
     */
    listSnapshotsUsingGET(req: operations.ListSnapshotsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListSnapshotsUsingGETResponse>;
    /**
     * listSnippets
     */
    listSnippetsUsingGET(req: operations.ListSnippetsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListSnippetsUsingGETResponse>;
    /**
     * publishSnapshot
     */
    publishSnapshotUsingPOST(req: operations.PublishSnapshotUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.PublishSnapshotUsingPOSTResponse>;
    /**
     * revertSnapshot
     */
    revertSnapshotUsingPOST(req: operations.RevertSnapshotUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.RevertSnapshotUsingPOSTResponse>;
    /**
     * updateQuery
     */
    updateQueryUsingPUT(req: operations.UpdateQueryUsingPUTRequest, config?: AxiosRequestConfig): Promise<operations.UpdateQueryUsingPUTResponse>;
    /**
     * updateScreen
     */
    updateScreenUsingPUT(req: operations.UpdateScreenUsingPUTRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScreenUsingPUTResponse>;
    /**
     * updateSnippet
     */
    updateSnippetUsingPUT(req: operations.UpdateSnippetUsingPUTRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSnippetUsingPUTResponse>;
}
