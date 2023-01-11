import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfGroupUsingGetQueryParams extends SpeakeasyBase {
    groupID?: string;
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfGroupUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGetRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfGroupUsingGetQueryParams;
}
export declare class ListSessionsOfGroupUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfGroupUsingGET200ApplicationJSONObject?: ListSessionsOfGroupUsingGet200ApplicationJson;
    listSessionsOfGroupUsingGET400ApplicationJSONObject?: ListSessionsOfGroupUsingGet400ApplicationJson;
    listSessionsOfGroupUsingGET401ApplicationJSONObject?: ListSessionsOfGroupUsingGet401ApplicationJson;
    listSessionsOfGroupUsingGET500ApplicationJSONObject?: ListSessionsOfGroupUsingGet500ApplicationJson;
}
