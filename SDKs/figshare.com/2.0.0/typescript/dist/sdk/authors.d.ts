import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Authors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * privateAuthorDetails - Author details
     *
     * View author details
    **/
    privateAuthorDetails(req: operations.PrivateAuthorDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateAuthorDetailsResponse>;
    /**
     * privateAuthorsSearch - Search Authors
     *
     * Search for authors
    **/
    privateAuthorsSearch(req: operations.PrivateAuthorsSearchRequest, config?: AxiosRequestConfig): Promise<operations.PrivateAuthorsSearchResponse>;
}
