import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppendChatMessageUsingPOSTRequest extends SpeakeasyBase {
    authorID?: string;
    padID?: string;
    text?: string;
    time?: string;
}
/**
 * internal api error (code 2)
 */
export declare class AppendChatMessageUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class AppendChatMessageUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class AppendChatMessageUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class AppendChatMessageUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    appendChatMessageUsingPOST200ApplicationJSONObject?: AppendChatMessageUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    appendChatMessageUsingPOST400ApplicationJSONObject?: AppendChatMessageUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    appendChatMessageUsingPOST401ApplicationJSONObject?: AppendChatMessageUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    appendChatMessageUsingPOST500ApplicationJSONObject?: AppendChatMessageUsingPost500ApplicationJSON;
}
