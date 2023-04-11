import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PadUsersCountUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class PadUsersCountUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class PadUsersCountUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class PadUsersCountUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingPost200ApplicationJSONData extends SpeakeasyBase {
    padUsersCount?: number;
}
/**
 * ok (code 0)
 */
export declare class PadUsersCountUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: PadUsersCountUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class PadUsersCountUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    padUsersCountUsingPOST200ApplicationJSONObject?: PadUsersCountUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    padUsersCountUsingPOST400ApplicationJSONObject?: PadUsersCountUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    padUsersCountUsingPOST401ApplicationJSONObject?: PadUsersCountUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    padUsersCountUsingPOST500ApplicationJSONObject?: PadUsersCountUsingPost500ApplicationJSON;
}
