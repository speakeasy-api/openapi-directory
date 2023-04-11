import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSessionsOfGroupUsingGETRequest extends SpeakeasyBase {
    groupID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListSessionsOfGroupUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListSessionsOfGroupUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListSessionsOfGroupUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJSONData extends SpeakeasyBase {
    sessions?: ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions[];
}
/**
 * ok (code 0)
 */
export declare class ListSessionsOfGroupUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfGroupUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listSessionsOfGroupUsingGET200ApplicationJSONObject?: ListSessionsOfGroupUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listSessionsOfGroupUsingGET400ApplicationJSONObject?: ListSessionsOfGroupUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listSessionsOfGroupUsingGET401ApplicationJSONObject?: ListSessionsOfGroupUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listSessionsOfGroupUsingGET500ApplicationJSONObject?: ListSessionsOfGroupUsingGet500ApplicationJSON;
}
