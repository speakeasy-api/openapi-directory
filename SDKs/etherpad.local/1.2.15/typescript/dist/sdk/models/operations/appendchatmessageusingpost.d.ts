import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendChatMessageUsingPostQueryParams extends SpeakeasyBase {
    authorID?: string;
    padID?: string;
    text?: string;
    time?: string;
}
export declare class AppendChatMessageUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPostRequest extends SpeakeasyBase {
    queryParams: AppendChatMessageUsingPostQueryParams;
}
export declare class AppendChatMessageUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendChatMessageUsingPOST200ApplicationJSONObject?: AppendChatMessageUsingPost200ApplicationJson;
    appendChatMessageUsingPOST400ApplicationJSONObject?: AppendChatMessageUsingPost400ApplicationJson;
    appendChatMessageUsingPOST401ApplicationJSONObject?: AppendChatMessageUsingPost401ApplicationJson;
    appendChatMessageUsingPOST500ApplicationJSONObject?: AppendChatMessageUsingPost500ApplicationJson;
}
