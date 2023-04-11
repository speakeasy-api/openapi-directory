import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSessionUsingPOSTRequest extends SpeakeasyBase {
    sessionID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class DeleteSessionUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class DeleteSessionUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class DeleteSessionUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class DeleteSessionUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    deleteSessionUsingPOST200ApplicationJSONObject?: DeleteSessionUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    deleteSessionUsingPOST400ApplicationJSONObject?: DeleteSessionUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    deleteSessionUsingPOST401ApplicationJSONObject?: DeleteSessionUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    deleteSessionUsingPOST500ApplicationJSONObject?: DeleteSessionUsingPost500ApplicationJSON;
}
