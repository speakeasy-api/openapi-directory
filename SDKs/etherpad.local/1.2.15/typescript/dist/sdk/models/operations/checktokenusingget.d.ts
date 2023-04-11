import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class CheckTokenUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CheckTokenUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CheckTokenUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CheckTokenUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    checkTokenUsingGET200ApplicationJSONObject?: CheckTokenUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    checkTokenUsingGET400ApplicationJSONObject?: CheckTokenUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    checkTokenUsingGET401ApplicationJSONObject?: CheckTokenUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    checkTokenUsingGET500ApplicationJSONObject?: CheckTokenUsingGet500ApplicationJSON;
}
