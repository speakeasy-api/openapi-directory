import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSessionsOfAuthorUsingGETRequest extends SpeakeasyBase {
    authorID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListSessionsOfAuthorUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListSessionsOfAuthorUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListSessionsOfAuthorUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJSONData extends SpeakeasyBase {
    sessions?: ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions[];
}
/**
 * ok (code 0)
 */
export declare class ListSessionsOfAuthorUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfAuthorUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listSessionsOfAuthorUsingGET200ApplicationJSONObject?: ListSessionsOfAuthorUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listSessionsOfAuthorUsingGET400ApplicationJSONObject?: ListSessionsOfAuthorUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listSessionsOfAuthorUsingGET401ApplicationJSONObject?: ListSessionsOfAuthorUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listSessionsOfAuthorUsingGET500ApplicationJSONObject?: ListSessionsOfAuthorUsingGet500ApplicationJSON;
}
