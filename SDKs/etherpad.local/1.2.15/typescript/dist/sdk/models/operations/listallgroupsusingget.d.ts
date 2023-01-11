import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllGroupsUsingGet200ApplicationJsonData extends SpeakeasyBase {
    groupIDs?: string[];
}
export declare class ListAllGroupsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllGroupsUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListAllGroupsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllGroupsUsingGET200ApplicationJSONObject?: ListAllGroupsUsingGet200ApplicationJson;
    listAllGroupsUsingGET400ApplicationJSONObject?: ListAllGroupsUsingGet400ApplicationJson;
    listAllGroupsUsingGET401ApplicationJSONObject?: ListAllGroupsUsingGet401ApplicationJson;
    listAllGroupsUsingGET500ApplicationJSONObject?: ListAllGroupsUsingGet500ApplicationJson;
}
