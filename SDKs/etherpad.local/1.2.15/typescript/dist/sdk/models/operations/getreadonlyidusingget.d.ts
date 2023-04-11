import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETReadOnlyIDUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETReadOnlyIDUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETReadOnlyIDUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETReadOnlyIDUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETReadOnlyIDUsingGet200ApplicationJSONData extends SpeakeasyBase {
    readOnlyID?: string;
}
/**
 * ok (code 0)
 */
export declare class GETReadOnlyIDUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETReadOnlyIDUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETReadOnlyIDUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getReadOnlyIDUsingGET200ApplicationJSONObject?: GETReadOnlyIDUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getReadOnlyIDUsingGET400ApplicationJSONObject?: GETReadOnlyIDUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getReadOnlyIDUsingGET401ApplicationJSONObject?: GETReadOnlyIDUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getReadOnlyIDUsingGET500ApplicationJSONObject?: GETReadOnlyIDUsingGet500ApplicationJSON;
}
