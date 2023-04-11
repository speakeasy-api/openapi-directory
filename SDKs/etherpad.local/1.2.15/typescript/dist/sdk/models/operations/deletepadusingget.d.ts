import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePadUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class DeletePadUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class DeletePadUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class DeletePadUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class DeletePadUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    deletePadUsingGET200ApplicationJSONObject?: DeletePadUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    deletePadUsingGET400ApplicationJSONObject?: DeletePadUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    deletePadUsingGET401ApplicationJSONObject?: DeletePadUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    deletePadUsingGET500ApplicationJSONObject?: DeletePadUsingGet500ApplicationJSON;
}
