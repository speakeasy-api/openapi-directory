import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Chapter {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiV1Chapters - Get all the 18 Chapters of the Bhagavad Gita.
     *
     * Get a list of all the 18 Chapters of the Bhagavad Gita.<br/>
    **/
    getApiV1Chapters(req: operations.GetApiV1ChaptersRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1ChaptersResponse>;
    /**
     * getApiV1ChaptersChapterNumber - Get a specific chapter from the Bhagavad Gita.
     *
     * Get information about a specific chapter from the Bhagavad Gita.<br/>
    **/
    getApiV1ChaptersChapterNumber(req: operations.GetApiV1ChaptersChapterNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1ChaptersChapterNumberResponse>;
}
