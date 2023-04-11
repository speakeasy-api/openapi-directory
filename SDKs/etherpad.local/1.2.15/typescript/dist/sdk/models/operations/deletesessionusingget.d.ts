import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSessionUsingGETRequest extends SpeakeasyBase {
    sessionID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class DeleteSessionUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class DeleteSessionUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class DeleteSessionUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class DeleteSessionUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    deleteSessionUsingGET200ApplicationJSONObject?: DeleteSessionUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    deleteSessionUsingGET400ApplicationJSONObject?: DeleteSessionUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    deleteSessionUsingGET401ApplicationJSONObject?: DeleteSessionUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    deleteSessionUsingGET500ApplicationJSONObject?: DeleteSessionUsingGet500ApplicationJSON;
}
