import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETChatHistoryUsingGETRequest extends SpeakeasyBase {
    end?: string;
    padID?: string;
    start?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETChatHistoryUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETChatHistoryUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETChatHistoryUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETChatHistoryUsingGet200ApplicationJSONDataMessages extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GETChatHistoryUsingGet200ApplicationJSONData extends SpeakeasyBase {
    messages?: GETChatHistoryUsingGet200ApplicationJSONDataMessages[];
}
/**
 * ok (code 0)
 */
export declare class GETChatHistoryUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETChatHistoryUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETChatHistoryUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getChatHistoryUsingGET200ApplicationJSONObject?: GETChatHistoryUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getChatHistoryUsingGET400ApplicationJSONObject?: GETChatHistoryUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getChatHistoryUsingGET401ApplicationJSONObject?: GETChatHistoryUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getChatHistoryUsingGET500ApplicationJSONObject?: GETChatHistoryUsingGet500ApplicationJSON;
}
