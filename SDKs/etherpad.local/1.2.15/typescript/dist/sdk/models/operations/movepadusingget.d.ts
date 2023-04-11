import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MovePadUsingGETRequest extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class MovePadUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class MovePadUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class MovePadUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class MovePadUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    movePadUsingGET200ApplicationJSONObject?: MovePadUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    movePadUsingGET400ApplicationJSONObject?: MovePadUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    movePadUsingGET401ApplicationJSONObject?: MovePadUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    movePadUsingGET500ApplicationJSONObject?: MovePadUsingGet500ApplicationJSON;
}
