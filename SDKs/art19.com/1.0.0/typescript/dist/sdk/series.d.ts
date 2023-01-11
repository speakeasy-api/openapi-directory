import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Series {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSeries - Get a list of series
     *
     * When retrieving a list of series, the result is automatically filtered depending on the
     * privileges the used credential holds. All credentials will have access to active series
     * with a public page enabled (on ART19). Utilizing a filter to limit the result to series
     * associated with your account is recommended.
     *
    **/
    getSeries(req: operations.GetSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesResponse>;
    /**
     * getSeriesId - Get a specific series
    **/
    getSeriesId(req: operations.GetSeriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdResponse>;
}
