import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GenreType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return genre type search result
     *
     * @remarks
     * Return genre type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{genre_description}__: Used as a key word to search genre types
     *
     * For more details on how genre types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     */
    genreTypeSearchRead(req: operations.GenreTypeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreTypeSearchReadResponse>;
}
