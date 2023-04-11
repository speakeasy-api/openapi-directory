import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SaveRevisionUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SaveRevisionUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SaveRevisionUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SaveRevisionUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SaveRevisionUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    saveRevisionUsingPOST200ApplicationJSONObject?: SaveRevisionUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    saveRevisionUsingPOST400ApplicationJSONObject?: SaveRevisionUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    saveRevisionUsingPOST401ApplicationJSONObject?: SaveRevisionUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    saveRevisionUsingPOST500ApplicationJSONObject?: SaveRevisionUsingPost500ApplicationJSON;
}
