import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSessionsOfAuthorUsingPOSTRequest extends SpeakeasyBase {
    authorID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListSessionsOfAuthorUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListSessionsOfAuthorUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListSessionsOfAuthorUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJSONData extends SpeakeasyBase {
    sessions?: ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions[];
}
/**
 * ok (code 0)
 */
export declare class ListSessionsOfAuthorUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfAuthorUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listSessionsOfAuthorUsingPOST200ApplicationJSONObject?: ListSessionsOfAuthorUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listSessionsOfAuthorUsingPOST400ApplicationJSONObject?: ListSessionsOfAuthorUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listSessionsOfAuthorUsingPOST401ApplicationJSONObject?: ListSessionsOfAuthorUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listSessionsOfAuthorUsingPOST500ApplicationJSONObject?: ListSessionsOfAuthorUsingPost500ApplicationJSON;
}
