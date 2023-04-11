import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CopyPadUsingPOSTRequest extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CopyPadUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CopyPadUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CopyPadUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CopyPadUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    copyPadUsingPOST200ApplicationJSONObject?: CopyPadUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    copyPadUsingPOST400ApplicationJSONObject?: CopyPadUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    copyPadUsingPOST401ApplicationJSONObject?: CopyPadUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    copyPadUsingPOST500ApplicationJSONObject?: CopyPadUsingPost500ApplicationJSON;
}
