import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePadUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreatePadUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreatePadUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreatePadUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CreatePadUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createPadUsingGET200ApplicationJSONObject?: CreatePadUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createPadUsingGET400ApplicationJSONObject?: CreatePadUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createPadUsingGET401ApplicationJSONObject?: CreatePadUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createPadUsingGET500ApplicationJSONObject?: CreatePadUsingGet500ApplicationJSON;
}
