import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChatHeadUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetChatHeadUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetChatHeadUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetChatHeadUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetChatHeadUsingPost200ApplicationJSONDataChatHead extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GetChatHeadUsingPost200ApplicationJSONData extends SpeakeasyBase {
    chatHead?: GetChatHeadUsingPost200ApplicationJSONDataChatHead;
}
/**
 * ok (code 0)
 */
export declare class GetChatHeadUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetChatHeadUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetChatHeadUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getChatHeadUsingPOST200ApplicationJSONObject?: GetChatHeadUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getChatHeadUsingPOST400ApplicationJSONObject?: GetChatHeadUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getChatHeadUsingPOST401ApplicationJSONObject?: GetChatHeadUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getChatHeadUsingPOST500ApplicationJSONObject?: GetChatHeadUsingPost500ApplicationJSON;
}
