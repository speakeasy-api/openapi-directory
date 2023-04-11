import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateSessionUsingPOSTRequest extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    validUntil?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateSessionUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateSessionUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateSessionUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingPost200ApplicationJSONData extends SpeakeasyBase {
    sessionID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateSessionUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateSessionUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class CreateSessionUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createSessionUsingPOST200ApplicationJSONObject?: CreateSessionUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createSessionUsingPOST400ApplicationJSONObject?: CreateSessionUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createSessionUsingPOST401ApplicationJSONObject?: CreateSessionUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createSessionUsingPOST500ApplicationJSONObject?: CreateSessionUsingPost500ApplicationJSON;
}
