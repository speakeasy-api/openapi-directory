import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SaveRevisionUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SaveRevisionUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SaveRevisionUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SaveRevisionUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SaveRevisionUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    saveRevisionUsingGET200ApplicationJSONObject?: SaveRevisionUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    saveRevisionUsingGET400ApplicationJSONObject?: SaveRevisionUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    saveRevisionUsingGET401ApplicationJSONObject?: SaveRevisionUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    saveRevisionUsingGET500ApplicationJSONObject?: SaveRevisionUsingGet500ApplicationJSON;
}
