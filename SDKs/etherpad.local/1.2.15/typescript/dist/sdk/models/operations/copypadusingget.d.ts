import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CopyPadUsingGETRequest extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CopyPadUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CopyPadUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CopyPadUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CopyPadUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    copyPadUsingGET200ApplicationJSONObject?: CopyPadUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    copyPadUsingGET400ApplicationJSONObject?: CopyPadUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    copyPadUsingGET401ApplicationJSONObject?: CopyPadUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    copyPadUsingGET500ApplicationJSONObject?: CopyPadUsingGet500ApplicationJSON;
}
