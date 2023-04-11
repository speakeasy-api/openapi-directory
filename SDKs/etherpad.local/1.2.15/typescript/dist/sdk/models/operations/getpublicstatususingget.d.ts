import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETPublicStatusUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETPublicStatusUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETPublicStatusUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETPublicStatusUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETPublicStatusUsingGet200ApplicationJSONData extends SpeakeasyBase {
    publicStatus?: boolean;
}
/**
 * ok (code 0)
 */
export declare class GETPublicStatusUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETPublicStatusUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETPublicStatusUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getPublicStatusUsingGET200ApplicationJSONObject?: GETPublicStatusUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getPublicStatusUsingGET400ApplicationJSONObject?: GETPublicStatusUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getPublicStatusUsingGET401ApplicationJSONObject?: GETPublicStatusUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getPublicStatusUsingGET500ApplicationJSONObject?: GETPublicStatusUsingGet500ApplicationJSON;
}
