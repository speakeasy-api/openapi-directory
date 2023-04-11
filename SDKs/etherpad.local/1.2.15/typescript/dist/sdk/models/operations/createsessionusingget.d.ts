import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateSessionUsingGETRequest extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    validUntil?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateSessionUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateSessionUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateSessionUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingGet200ApplicationJSONData extends SpeakeasyBase {
    sessionID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateSessionUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateSessionUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class CreateSessionUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createSessionUsingGET200ApplicationJSONObject?: CreateSessionUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createSessionUsingGET400ApplicationJSONObject?: CreateSessionUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createSessionUsingGET401ApplicationJSONObject?: CreateSessionUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createSessionUsingGET500ApplicationJSONObject?: CreateSessionUsingGet500ApplicationJSON;
}
