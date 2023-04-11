import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETTextUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETTextUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETTextUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETTextUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETTextUsingGet200ApplicationJSONData extends SpeakeasyBase {
    text?: string;
}
/**
 * ok (code 0)
 */
export declare class GETTextUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETTextUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETTextUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getTextUsingGET200ApplicationJSONObject?: GETTextUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getTextUsingGET400ApplicationJSONObject?: GETTextUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getTextUsingGET401ApplicationJSONObject?: GETTextUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getTextUsingGET500ApplicationJSONObject?: GETTextUsingGet500ApplicationJSON;
}
