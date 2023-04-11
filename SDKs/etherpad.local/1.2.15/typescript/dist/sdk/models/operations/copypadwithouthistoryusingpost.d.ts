import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CopyPadWithoutHistoryUsingPOSTRequest extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CopyPadWithoutHistoryUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CopyPadWithoutHistoryUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CopyPadWithoutHistoryUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CopyPadWithoutHistoryUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    copyPadWithoutHistoryUsingPOST200ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    copyPadWithoutHistoryUsingPOST400ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    copyPadWithoutHistoryUsingPOST401ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    copyPadWithoutHistoryUsingPOST500ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost500ApplicationJSON;
}
