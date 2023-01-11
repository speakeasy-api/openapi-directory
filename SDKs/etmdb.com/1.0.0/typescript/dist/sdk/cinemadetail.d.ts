import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CinemaDetail {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cinemaDetailSearchRead - Return cinema details search result
     *
     * Return cinema details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{cinema_name}__: Used as a key word to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    cinemaDetailSearchRead(req: operations.CinemaDetailSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaDetailSearchReadResponse>;
}
