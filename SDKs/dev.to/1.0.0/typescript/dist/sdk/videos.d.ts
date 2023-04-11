import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Videos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Articles with a video
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.
     *
     * It will only return published video articles ordered by descending popularity.
     *
     * It supports pagination, each page will contain 24 articles by default.
     */
    videos(req: operations.VideosRequest, config?: AxiosRequestConfig): Promise<operations.VideosResponse>;
}
