import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class KeywordExtractionRequestBody extends SpeakeasyBase {
    /**
     * Your API Key
     */
    apiKey: string;
    /**
     * The number of keyword combinations (n-grams) that you wish to extract.
     */
    n?: number;
    /**
     * The text that you want to analyze. It should not contain HTML tags.
     */
    text?: string;
}
export declare class KeywordExtractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
