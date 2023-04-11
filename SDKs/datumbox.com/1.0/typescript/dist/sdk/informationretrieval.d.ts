import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information Retrieval Functions
 */
export declare class InformationRetrieval {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Extracts the Keywords of the Document
     *
     * @remarks
     * The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.
     */
    keywordExtraction(req: operations.KeywordExtractionRequestBody, config?: AxiosRequestConfig): Promise<operations.KeywordExtractionResponse>;
    /**
     * Extracts the clear text from Webpage
     *
     * @remarks
     * The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.
     */
    textExtraction(req: operations.TextExtractionRequestBody, config?: AxiosRequestConfig): Promise<operations.TextExtractionResponse>;
}
