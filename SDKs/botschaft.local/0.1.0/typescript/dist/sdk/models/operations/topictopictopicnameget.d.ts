import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TopicTopicTopicNameGetRequest extends SpeakeasyBase {
    authorization?: string;
    base64Message?: string;
    message?: string;
    topicName: string;
}
export declare class TopicTopicTopicNameGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    topicTopicTopicNameGet200ApplicationJSONAny?: any;
}
