import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UpdateTopicStatusRequestBodyEnabledEnum {
    True = "true",
    False = "false"
}
export declare enum UpdateTopicStatusRequestBodyStatusEnum {
    Closed = "closed",
    Pinned = "pinned",
    PinnedGlobally = "pinned_globally",
    Archived = "archived",
    Visible = "visible"
}
export declare class UpdateTopicStatusRequestBody extends SpeakeasyBase {
    enabled: UpdateTopicStatusRequestBodyEnabledEnum;
    status: UpdateTopicStatusRequestBodyStatusEnum;
    /**
     * Only required for `pinned` and `pinned_globally`
     */
    until?: string;
}
export declare class UpdateTopicStatusRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: UpdateTopicStatusRequestBody;
    id: string;
}
/**
 * topic updated
 */
export declare class UpdateTopicStatus200ApplicationJSON extends SpeakeasyBase {
    success?: string;
    topicStatusUpdate?: string;
}
export declare class UpdateTopicStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * topic updated
     */
    updateTopicStatus200ApplicationJSONObject?: UpdateTopicStatus200ApplicationJSON;
}
