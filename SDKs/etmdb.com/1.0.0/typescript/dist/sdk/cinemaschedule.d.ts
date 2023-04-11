import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CinemaSchedule {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return cinema schedule search result
     *
     * @remarks
     * Return cinema schedule search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     */
    cinemaScheduleSearchRead(req: operations.CinemaScheduleSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaScheduleSearchReadResponse>;
    /**
     * Return cinema schedule search result
     *
     * @remarks
     * Return cinema schedule search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * movie title
     * * cinema name
     * * cinema hall name or
     * * cinema technology
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     */
    cinemaScheduleSearchallRead(req: operations.CinemaScheduleSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaScheduleSearchallReadResponse>;
}
