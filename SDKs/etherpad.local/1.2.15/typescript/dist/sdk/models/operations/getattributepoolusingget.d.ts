import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAttributePoolUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETAttributePoolUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETAttributePoolUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETAttributePoolUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GETAttributePoolUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETAttributePoolUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getAttributePoolUsingGET200ApplicationJSONObject?: GETAttributePoolUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getAttributePoolUsingGET400ApplicationJSONObject?: GETAttributePoolUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getAttributePoolUsingGET401ApplicationJSONObject?: GETAttributePoolUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getAttributePoolUsingGET500ApplicationJSONObject?: GETAttributePoolUsingGet500ApplicationJSON;
}
