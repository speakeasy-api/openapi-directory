import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetTextUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SetTextUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SetTextUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SetTextUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SetTextUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    setTextUsingGET200ApplicationJSONObject?: SetTextUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    setTextUsingGET400ApplicationJSONObject?: SetTextUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    setTextUsingGET401ApplicationJSONObject?: SetTextUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    setTextUsingGET500ApplicationJSONObject?: SetTextUsingGet500ApplicationJSON;
}
