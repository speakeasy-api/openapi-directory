import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETChatHeadUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETChatHeadUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETChatHeadUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETChatHeadUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETChatHeadUsingGet200ApplicationJSONDataChatHead extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GETChatHeadUsingGet200ApplicationJSONData extends SpeakeasyBase {
    chatHead?: GETChatHeadUsingGet200ApplicationJSONDataChatHead;
}
/**
 * ok (code 0)
 */
export declare class GETChatHeadUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETChatHeadUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETChatHeadUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getChatHeadUsingGET200ApplicationJSONObject?: GETChatHeadUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getChatHeadUsingGET400ApplicationJSONObject?: GETChatHeadUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getChatHeadUsingGET401ApplicationJSONObject?: GETChatHeadUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getChatHeadUsingGET500ApplicationJSONObject?: GETChatHeadUsingGet500ApplicationJSON;
}
