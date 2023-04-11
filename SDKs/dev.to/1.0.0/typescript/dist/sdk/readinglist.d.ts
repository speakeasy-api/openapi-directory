import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Readinglist {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Readinglist
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
     *         It supports pagination, each page will contain `30` articles by default
     */
    getReadinglist(req: operations.GetReadinglistRequest, config?: AxiosRequestConfig): Promise<operations.GetReadinglistResponse>;
}
