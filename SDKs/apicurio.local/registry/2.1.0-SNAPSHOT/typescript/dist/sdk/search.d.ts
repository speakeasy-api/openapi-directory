import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchArtifacts - Search for artifacts
     *
     * Returns a paginated list of all artifacts that match the provided filter criteria.
     *
    **/
    searchArtifacts(req: operations.SearchArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsResponse>;
    /**
     * searchArtifactsByContent - Search for artifacts by content
     *
     * Returns a paginated list of all artifacts with at least one version that matches the
     * posted content.
     *
    **/
    searchArtifactsByContent(req: operations.SearchArtifactsByContentRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsByContentResponse>;
}
