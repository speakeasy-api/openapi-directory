import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FilmographyType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * filmographyTypeSearchRead - Return filmography type search result
     *
     * Return filmography type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{filmography_description}__: Used as a key word to search filmography types
     *
     * For more details on how filmography types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    filmographyTypeSearchRead(req: operations.FilmographyTypeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographyTypeSearchReadResponse>;
}
