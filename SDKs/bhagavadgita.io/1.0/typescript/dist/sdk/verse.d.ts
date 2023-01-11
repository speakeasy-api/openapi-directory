import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Verse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiV1ChaptersChapterNumberVerses - Get all the Verses from a Chapter.
     *
     * Get a list of all Verses from a particular Chapter.<br/>
    **/
    getApiV1ChaptersChapterNumberVerses(req: operations.GetApiV1ChaptersChapterNumberVersesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1ChaptersChapterNumberVersesResponse>;
    /**
     * getApiV1ChaptersChapterNumberVersesVerseNumber - Get a particular verse from a chapter.
     *
     * Get a specific verse from a specific chapter.<br/>
    **/
    getApiV1ChaptersChapterNumberVersesVerseNumber(req: operations.GetApiV1ChaptersChapterNumberVersesVerseNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1ChaptersChapterNumberVersesVerseNumberResponse>;
    /**
     * getApiV1Verses - Get all the Verses.
     *
     * Get a list of all Verses.<br/>
    **/
    getApiV1Verses(req: operations.GetApiV1VersesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1VersesResponse>;
}
