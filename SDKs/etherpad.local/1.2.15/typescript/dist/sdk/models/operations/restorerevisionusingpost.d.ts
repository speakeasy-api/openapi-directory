import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RestoreRevisionUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class RestoreRevisionUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class RestoreRevisionUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class RestoreRevisionUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class RestoreRevisionUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    restoreRevisionUsingPOST200ApplicationJSONObject?: RestoreRevisionUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    restoreRevisionUsingPOST400ApplicationJSONObject?: RestoreRevisionUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    restoreRevisionUsingPOST401ApplicationJSONObject?: RestoreRevisionUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    restoreRevisionUsingPOST500ApplicationJSONObject?: RestoreRevisionUsingPost500ApplicationJSON;
}
