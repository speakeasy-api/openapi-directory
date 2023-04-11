import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PadUsersUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class PadUsersUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class PadUsersUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class PadUsersUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingGet200ApplicationJSONDataPadUsers extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class PadUsersUsingGet200ApplicationJSONData extends SpeakeasyBase {
    padUsers?: PadUsersUsingGet200ApplicationJSONDataPadUsers[];
}
/**
 * ok (code 0)
 */
export declare class PadUsersUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: PadUsersUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class PadUsersUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    padUsersUsingGET200ApplicationJSONObject?: PadUsersUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    padUsersUsingGET400ApplicationJSONObject?: PadUsersUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    padUsersUsingGET401ApplicationJSONObject?: PadUsersUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    padUsersUsingGET500ApplicationJSONObject?: PadUsersUsingGet500ApplicationJSON;
}
