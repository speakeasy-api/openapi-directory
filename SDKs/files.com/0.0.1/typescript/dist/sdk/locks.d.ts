import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about locks
 */
export declare class Locks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Lock
     *
     * @remarks
     * Delete Lock
     */
    deleteLocksPath(req: operations.DeleteLocksPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocksPathResponse>;
    /**
     * List Locks by path
     *
     * @remarks
     * List Locks by path
     */
    lockListForPath(req: operations.LockListForPathRequest, config?: AxiosRequestConfig): Promise<operations.LockListForPathResponse>;
    /**
     * Create Lock
     *
     * @remarks
     * Create Lock
     */
    postLocksPath(req: operations.PostLocksPathRequest, config?: AxiosRequestConfig): Promise<operations.PostLocksPathResponse>;
}
