import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Genre {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * genreSearchRead - Return movie genre search result
     *
     * Return movie genre search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie genres
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    genreSearchRead(req: operations.GenreSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreSearchReadResponse>;
    /**
     * genreSearchallRead - Return movie genre search result
     *
     * Return movie genre search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_genre_type}__: Used as a key word to search movie genres
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    genreSearchallRead(req: operations.GenreSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreSearchallReadResponse>;
}
