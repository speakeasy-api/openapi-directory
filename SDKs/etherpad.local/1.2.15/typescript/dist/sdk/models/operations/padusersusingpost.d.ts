import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PadUsersUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class PadUsersUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class PadUsersUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class PadUsersUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingPost200ApplicationJSONDataPadUsers extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class PadUsersUsingPost200ApplicationJSONData extends SpeakeasyBase {
    padUsers?: PadUsersUsingPost200ApplicationJSONDataPadUsers[];
}
/**
 * ok (code 0)
 */
export declare class PadUsersUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: PadUsersUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class PadUsersUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    padUsersUsingPOST200ApplicationJSONObject?: PadUsersUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    padUsersUsingPOST400ApplicationJSONObject?: PadUsersUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    padUsersUsingPOST401ApplicationJSONObject?: PadUsersUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    padUsersUsingPOST500ApplicationJSONObject?: PadUsersUsingPost500ApplicationJSON;
}
