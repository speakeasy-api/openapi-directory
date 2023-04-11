import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all active projects for the user
     *
     * @remarks
     * List all active projects for the user
     */
    getUserProjects(req: operations.GetUserProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserProjectsResponse>;
}
