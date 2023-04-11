import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SentimentAnalysisRequestBody extends SpeakeasyBase {
    /**
     * Your API Key
     */
    apiKey: string;
    /**
     * The text that you want to analyze. It should not contain HTML tags.
     */
    text?: string;
}
export declare class SentimentAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
