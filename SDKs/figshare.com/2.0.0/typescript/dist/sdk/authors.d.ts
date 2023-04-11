import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Authors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Author details
     *
     * @remarks
     * View author details
     */
    privateAuthorDetails(req: operations.PrivateAuthorDetailsRequest, security: operations.PrivateAuthorDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateAuthorDetailsResponse>;
    /**
     * Search Authors
     *
     * @remarks
     * Search for authors
     */
    privateAuthorsSearch(req: shared.PrivateAuthorsSearch, security: operations.PrivateAuthorsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateAuthorsSearchResponse>;
}
