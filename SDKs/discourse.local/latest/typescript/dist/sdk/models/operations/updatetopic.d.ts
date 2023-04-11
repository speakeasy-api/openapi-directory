import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateTopicRequestBodyTopic extends SpeakeasyBase {
    categoryId?: number;
    title?: string;
}
export declare class UpdateTopicRequestBody extends SpeakeasyBase {
    topic?: UpdateTopicRequestBodyTopic;
}
export declare class UpdateTopicRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: UpdateTopicRequestBody;
    id: string;
}
export declare class UpdateTopic200ApplicationJSONBasicTopic extends SpeakeasyBase {
    fancyTitle?: string;
    id?: number;
    postsCount?: number;
    slug?: string;
    title?: string;
}
/**
 * topic updated
 */
export declare class UpdateTopic200ApplicationJSON extends SpeakeasyBase {
    basicTopic?: UpdateTopic200ApplicationJSONBasicTopic;
}
export declare class UpdateTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * topic updated
     */
    updateTopic200ApplicationJSONObject?: UpdateTopic200ApplicationJSON;
}
