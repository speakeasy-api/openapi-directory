import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CinemaSheduleShowtime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return cinema schedule and showtime search result
     *
     * @remarks
     * Return cinema schedule and showtime search result
     *
     * ### Response Class (Status 200)
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     */
    cinemaSheduleShowtimeSearchRead(req: operations.CinemaSheduleShowtimeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSheduleShowtimeSearchReadResponse>;
    /**
     * Return cinema schedule and showtime search result
     *
     * @remarks
     * Return cinema schedule and showtime search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * movie title
     * * cinema name
     * * cinema hall name
     * * showtime starting date
     * * showtime ending date or
     * * cinema technology
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     */
    cinemaSheduleShowtimeSearchallRead(req: operations.CinemaSheduleShowtimeSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSheduleShowtimeSearchallReadResponse>;
}
