import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PadUsersCountUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class PadUsersCountUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class PadUsersCountUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class PadUsersCountUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingGet200ApplicationJSONData extends SpeakeasyBase {
    padUsersCount?: number;
}
/**
 * ok (code 0)
 */
export declare class PadUsersCountUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: PadUsersCountUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class PadUsersCountUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    padUsersCountUsingGET200ApplicationJSONObject?: PadUsersCountUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    padUsersCountUsingGET400ApplicationJSONObject?: PadUsersCountUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    padUsersCountUsingGET401ApplicationJSONObject?: PadUsersCountUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    padUsersCountUsingGET500ApplicationJSONObject?: PadUsersCountUsingGet500ApplicationJSON;
}
