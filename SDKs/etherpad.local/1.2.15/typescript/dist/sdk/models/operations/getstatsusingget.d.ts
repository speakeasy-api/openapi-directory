import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class GETStatsUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETStatsUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETStatsUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GETStatsUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETStatsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getStatsUsingGET200ApplicationJSONObject?: GETStatsUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getStatsUsingGET400ApplicationJSONObject?: GETStatsUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getStatsUsingGET401ApplicationJSONObject?: GETStatsUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getStatsUsingGET500ApplicationJSONObject?: GETStatsUsingGet500ApplicationJSON;
}
