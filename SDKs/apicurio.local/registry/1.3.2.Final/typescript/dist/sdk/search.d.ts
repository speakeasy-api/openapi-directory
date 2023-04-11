import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions.
 */
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search for artifacts
     *
     * @remarks
     * Returns a paginated list of all artifacts that match the provided search criteria.
     *
     */
    searchArtifacts(req: operations.SearchArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsResponse>;
    /**
     * Search artifact versions
     *
     * @remarks
     * Searches for versions of a specific artifact.  This is typically used to get a listing
     * of all versions of an artifact (for example, in a user interface).
     */
    searchVersions(req: operations.SearchVersionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchVersionsResponse>;
}
