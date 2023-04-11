import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateTopicTimestampRequestBody extends SpeakeasyBase {
    timestamp: string;
}
export declare class UpdateTopicTimestampRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: UpdateTopicTimestampRequestBody;
    id: string;
}
/**
 * topic updated
 */
export declare class UpdateTopicTimestamp200ApplicationJSON extends SpeakeasyBase {
    success?: string;
}
export declare class UpdateTopicTimestampResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * topic updated
     */
    updateTopicTimestamp200ApplicationJSONObject?: UpdateTopicTimestamp200ApplicationJSON;
}
