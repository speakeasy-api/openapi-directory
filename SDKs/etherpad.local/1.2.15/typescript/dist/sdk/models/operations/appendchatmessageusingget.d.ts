import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppendChatMessageUsingGETRequest extends SpeakeasyBase {
    authorID?: string;
    padID?: string;
    text?: string;
    time?: string;
}
/**
 * internal api error (code 2)
 */
export declare class AppendChatMessageUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class AppendChatMessageUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class AppendChatMessageUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class AppendChatMessageUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    appendChatMessageUsingGET200ApplicationJSONObject?: AppendChatMessageUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    appendChatMessageUsingGET400ApplicationJSONObject?: AppendChatMessageUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    appendChatMessageUsingGET401ApplicationJSONObject?: AppendChatMessageUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    appendChatMessageUsingGET500ApplicationJSONObject?: AppendChatMessageUsingGet500ApplicationJSON;
}
