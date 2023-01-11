import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mediaSearchRead - Return movie media search result
     *
     * Return movie media search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search media for movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how media is listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    mediaSearchRead(req: operations.MediaSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MediaSearchReadResponse>;
    /**
     * mediaSearchallRead - Return cast media search result
     *
     * Return cast media search result
     *
     * ### Response Class (Status 200)
     * __{user}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     *
     * For more details on how cast media is listed [see here][ref].
     * [ref]: https://etmdb.com/en/cast-list/-updated_date
    **/
    mediaSearchallRead(req: operations.MediaSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.MediaSearchallReadResponse>;
}
