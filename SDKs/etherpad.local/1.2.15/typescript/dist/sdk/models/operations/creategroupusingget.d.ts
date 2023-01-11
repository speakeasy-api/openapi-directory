import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupUsingGet200ApplicationJsonData extends SpeakeasyBase {
    groupID?: string;
}
export declare class CreateGroupUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupUsingGET200ApplicationJSONObject?: CreateGroupUsingGet200ApplicationJson;
    createGroupUsingGET400ApplicationJSONObject?: CreateGroupUsingGet400ApplicationJson;
    createGroupUsingGET401ApplicationJSONObject?: CreateGroupUsingGet401ApplicationJson;
    createGroupUsingGET500ApplicationJSONObject?: CreateGroupUsingGet500ApplicationJson;
}
