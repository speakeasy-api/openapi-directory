import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
    authorID?: string;
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfAuthorUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGetRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfAuthorUsingGetQueryParams;
}
export declare class ListSessionsOfAuthorUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfAuthorUsingGET200ApplicationJSONObject?: ListSessionsOfAuthorUsingGet200ApplicationJson;
    listSessionsOfAuthorUsingGET400ApplicationJSONObject?: ListSessionsOfAuthorUsingGet400ApplicationJson;
    listSessionsOfAuthorUsingGET401ApplicationJSONObject?: ListSessionsOfAuthorUsingGet401ApplicationJson;
    listSessionsOfAuthorUsingGET500ApplicationJSONObject?: ListSessionsOfAuthorUsingGet500ApplicationJson;
}
