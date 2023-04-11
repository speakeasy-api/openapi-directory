import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class GetStatsUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetStatsUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetStatsUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GetStatsUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getStatsUsingPOST200ApplicationJSONObject?: GetStatsUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getStatsUsingPOST400ApplicationJSONObject?: GetStatsUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getStatsUsingPOST401ApplicationJSONObject?: GetStatsUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getStatsUsingPOST500ApplicationJSONObject?: GetStatsUsingPost500ApplicationJSON;
}
