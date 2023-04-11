import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TopicClassificationRequestBody extends SpeakeasyBase {
    /**
     * Your API Key
     */
    apiKey: string;
    /**
     * The text that you want to analyze. It should not contain HTML tags.
     */
    text?: string;
}
export declare class TopicClassificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
