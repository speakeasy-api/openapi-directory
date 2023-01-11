import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfGroupUsingPostQueryParams extends SpeakeasyBase {
    groupID?: string;
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfGroupUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPostRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfGroupUsingPostQueryParams;
}
export declare class ListSessionsOfGroupUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfGroupUsingPOST200ApplicationJSONObject?: ListSessionsOfGroupUsingPost200ApplicationJson;
    listSessionsOfGroupUsingPOST400ApplicationJSONObject?: ListSessionsOfGroupUsingPost400ApplicationJson;
    listSessionsOfGroupUsingPOST401ApplicationJSONObject?: ListSessionsOfGroupUsingPost401ApplicationJson;
    listSessionsOfGroupUsingPOST500ApplicationJSONObject?: ListSessionsOfGroupUsingPost500ApplicationJson;
}
