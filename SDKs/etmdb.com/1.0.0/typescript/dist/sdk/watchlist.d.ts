import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Watchlist {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return watchlist search result
     *
     * @remarks
     * Return watchlist search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies on watchlist
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
     */
    watchlistSearchRead(req: operations.WatchlistSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.WatchlistSearchReadResponse>;
    /**
     * Return watchlist search result
     *
     * @remarks
     * Return watchlist search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     *
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
     */
    watchlistSearchallRead(req: operations.WatchlistSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.WatchlistSearchallReadResponse>;
}
