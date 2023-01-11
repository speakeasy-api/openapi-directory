import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
    groupMapper?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
    groupID?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupIfNotExistsForUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateGroupIfNotExistsForUsingGetQueryParams;
}
export declare class CreateGroupIfNotExistsForUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupIfNotExistsForUsingGET200ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet200ApplicationJson;
    createGroupIfNotExistsForUsingGET400ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet400ApplicationJson;
    createGroupIfNotExistsForUsingGET401ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet401ApplicationJson;
    createGroupIfNotExistsForUsingGET500ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet500ApplicationJson;
}
