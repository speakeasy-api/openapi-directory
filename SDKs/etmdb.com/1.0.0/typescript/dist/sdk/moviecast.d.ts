import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MovieCast {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * movieCastSearchRead - Return movie cast search result
     *
     * Return movie cast search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movie casts are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    movieCastSearchRead(req: operations.MovieCastSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieCastSearchReadResponse>;
    /**
     * movieCastSearchallRead - Return movie cast search result
     *
     * Return movie cast search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * * character name
     *
     * For more details on how movie casts are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    movieCastSearchallRead(req: operations.MovieCastSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieCastSearchallReadResponse>;
}
