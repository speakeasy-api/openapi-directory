import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSessionsOfGroupUsingPOSTRequest extends SpeakeasyBase {
    groupID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListSessionsOfGroupUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListSessionsOfGroupUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListSessionsOfGroupUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJSONData extends SpeakeasyBase {
    sessions?: ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions[];
}
/**
 * ok (code 0)
 */
export declare class ListSessionsOfGroupUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfGroupUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listSessionsOfGroupUsingPOST200ApplicationJSONObject?: ListSessionsOfGroupUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listSessionsOfGroupUsingPOST400ApplicationJSONObject?: ListSessionsOfGroupUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listSessionsOfGroupUsingPOST401ApplicationJSONObject?: ListSessionsOfGroupUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listSessionsOfGroupUsingPOST500ApplicationJSONObject?: ListSessionsOfGroupUsingPost500ApplicationJSON;
}
