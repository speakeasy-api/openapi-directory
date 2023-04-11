import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CopyPadWithoutHistoryUsingGETRequest extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CopyPadWithoutHistoryUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CopyPadWithoutHistoryUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CopyPadWithoutHistoryUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CopyPadWithoutHistoryUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    copyPadWithoutHistoryUsingGET200ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    copyPadWithoutHistoryUsingGET400ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    copyPadWithoutHistoryUsingGET401ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    copyPadWithoutHistoryUsingGET500ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet500ApplicationJSON;
}
