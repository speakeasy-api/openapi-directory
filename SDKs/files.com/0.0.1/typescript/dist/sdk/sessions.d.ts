import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about sessions
 */
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete user session (log out)
     *
     * @remarks
     * Delete user session (log out)
     */
    deleteSessions(config?: AxiosRequestConfig): Promise<operations.DeleteSessionsResponse>;
    /**
     * Create user session (log in)
     *
     * @remarks
     * Create user session (log in)
     */
    postSessions(req: operations.PostSessionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSessionsResponse>;
}
