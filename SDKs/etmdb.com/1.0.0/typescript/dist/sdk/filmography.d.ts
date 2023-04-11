import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Filmography {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return filmography search result
     *
     * @remarks
     * Return filmography search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     */
    filmographySearchRead(req: operations.FilmographySearchReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographySearchReadResponse>;
    /**
     * Return filmography search result
     *
     * @remarks
     * Return filmography search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * * filmography description (such as director, actor, producer, etc)
     *
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     */
    filmographySearchallRead(req: operations.FilmographySearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographySearchallReadResponse>;
}
