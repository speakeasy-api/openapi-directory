import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MovePadUsingPOSTRequest extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class MovePadUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class MovePadUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class MovePadUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class MovePadUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    movePadUsingPOST200ApplicationJSONObject?: MovePadUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    movePadUsingPOST400ApplicationJSONObject?: MovePadUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    movePadUsingPOST401ApplicationJSONObject?: MovePadUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    movePadUsingPOST500ApplicationJSONObject?: MovePadUsingPost500ApplicationJSON;
}
