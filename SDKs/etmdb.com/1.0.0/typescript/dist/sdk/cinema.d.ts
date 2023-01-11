import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cinema {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cinemaSearchRead - Return cinema search result
     *
     * Return cinema search result
     *
     * ### Response Class (Status 200)
     *
     * * __{id}__: Used as a key to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    cinemaSearchRead(req: operations.CinemaSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSearchReadResponse>;
}
