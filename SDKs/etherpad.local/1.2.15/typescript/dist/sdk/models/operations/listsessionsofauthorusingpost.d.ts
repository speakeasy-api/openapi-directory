import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
    authorID?: string;
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfAuthorUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPostRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfAuthorUsingPostQueryParams;
}
export declare class ListSessionsOfAuthorUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfAuthorUsingPOST200ApplicationJSONObject?: ListSessionsOfAuthorUsingPost200ApplicationJson;
    listSessionsOfAuthorUsingPOST400ApplicationJSONObject?: ListSessionsOfAuthorUsingPost400ApplicationJson;
    listSessionsOfAuthorUsingPOST401ApplicationJSONObject?: ListSessionsOfAuthorUsingPost401ApplicationJson;
    listSessionsOfAuthorUsingPOST500ApplicationJSONObject?: ListSessionsOfAuthorUsingPost500ApplicationJson;
}
