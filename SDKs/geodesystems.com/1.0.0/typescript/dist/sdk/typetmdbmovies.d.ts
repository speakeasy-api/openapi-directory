import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Tmdb Movies' entry type
 */
export declare class TypeTmdbmovies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Tmdb Movies' entry type
     *
     * @remarks
     * API to search for entries of type Tmdb Movies
     */
    searchTmdbmovies(req: operations.SearchTmdbmoviesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTmdbmoviesResponse>;
}
