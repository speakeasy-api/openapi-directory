import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChatHistoryUsingPostQueryParams extends SpeakeasyBase {
    end?: string;
    padID?: string;
    start?: string;
}
export declare class GetChatHistoryUsingPost200ApplicationJsonDataMessages extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GetChatHistoryUsingPost200ApplicationJsonData extends SpeakeasyBase {
    messages?: GetChatHistoryUsingPost200ApplicationJsonDataMessages[];
}
export declare class GetChatHistoryUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetChatHistoryUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetChatHistoryUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetChatHistoryUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetChatHistoryUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetChatHistoryUsingPostRequest extends SpeakeasyBase {
    queryParams: GetChatHistoryUsingPostQueryParams;
}
export declare class GetChatHistoryUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getChatHistoryUsingPOST200ApplicationJSONObject?: GetChatHistoryUsingPost200ApplicationJson;
    getChatHistoryUsingPOST400ApplicationJSONObject?: GetChatHistoryUsingPost400ApplicationJson;
    getChatHistoryUsingPOST401ApplicationJSONObject?: GetChatHistoryUsingPost401ApplicationJson;
    getChatHistoryUsingPOST500ApplicationJSONObject?: GetChatHistoryUsingPost500ApplicationJson;
}
