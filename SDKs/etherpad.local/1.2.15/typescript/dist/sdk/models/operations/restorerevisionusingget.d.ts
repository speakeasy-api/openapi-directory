import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RestoreRevisionUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class RestoreRevisionUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class RestoreRevisionUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class RestoreRevisionUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class RestoreRevisionUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    restoreRevisionUsingGET200ApplicationJSONObject?: RestoreRevisionUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    restoreRevisionUsingGET400ApplicationJSONObject?: RestoreRevisionUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    restoreRevisionUsingGET401ApplicationJSONObject?: RestoreRevisionUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    restoreRevisionUsingGET500ApplicationJSONObject?: RestoreRevisionUsingGet500ApplicationJSON;
}
