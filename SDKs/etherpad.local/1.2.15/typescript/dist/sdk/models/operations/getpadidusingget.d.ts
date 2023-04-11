import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETPadIDUsingGETRequest extends SpeakeasyBase {
    roID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETPadIDUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETPadIDUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETPadIDUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GETPadIDUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETPadIDUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getPadIDUsingGET200ApplicationJSONObject?: GETPadIDUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getPadIDUsingGET400ApplicationJSONObject?: GETPadIDUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getPadIDUsingGET401ApplicationJSONObject?: GETPadIDUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getPadIDUsingGET500ApplicationJSONObject?: GETPadIDUsingGet500ApplicationJSON;
}
