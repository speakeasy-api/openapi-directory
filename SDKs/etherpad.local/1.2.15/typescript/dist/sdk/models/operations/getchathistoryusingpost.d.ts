import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChatHistoryUsingPOSTRequest extends SpeakeasyBase {
    end?: string;
    padID?: string;
    start?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetChatHistoryUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetChatHistoryUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetChatHistoryUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetChatHistoryUsingPost200ApplicationJSONDataMessages extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GetChatHistoryUsingPost200ApplicationJSONData extends SpeakeasyBase {
    messages?: GetChatHistoryUsingPost200ApplicationJSONDataMessages[];
}
/**
 * ok (code 0)
 */
export declare class GetChatHistoryUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetChatHistoryUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetChatHistoryUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getChatHistoryUsingPOST200ApplicationJSONObject?: GetChatHistoryUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getChatHistoryUsingPOST400ApplicationJSONObject?: GetChatHistoryUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getChatHistoryUsingPOST401ApplicationJSONObject?: GetChatHistoryUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getChatHistoryUsingPOST500ApplicationJSONObject?: GetChatHistoryUsingPost500ApplicationJSON;
}
