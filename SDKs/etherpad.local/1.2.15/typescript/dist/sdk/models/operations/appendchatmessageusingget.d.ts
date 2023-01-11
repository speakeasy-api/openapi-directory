import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendChatMessageUsingGetQueryParams extends SpeakeasyBase {
    authorID?: string;
    padID?: string;
    text?: string;
    time?: string;
}
export declare class AppendChatMessageUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGetRequest extends SpeakeasyBase {
    queryParams: AppendChatMessageUsingGetQueryParams;
}
export declare class AppendChatMessageUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendChatMessageUsingGET200ApplicationJSONObject?: AppendChatMessageUsingGet200ApplicationJson;
    appendChatMessageUsingGET400ApplicationJSONObject?: AppendChatMessageUsingGet400ApplicationJson;
    appendChatMessageUsingGET401ApplicationJSONObject?: AppendChatMessageUsingGet401ApplicationJson;
    appendChatMessageUsingGET500ApplicationJSONObject?: AppendChatMessageUsingGet500ApplicationJson;
}
