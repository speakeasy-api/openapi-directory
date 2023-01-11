import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSessionUsingGetQueryParams extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    validUntil?: string;
}
export declare class CreateSessionUsingGet200ApplicationJsonData extends SpeakeasyBase {
    sessionID?: string;
}
export declare class CreateSessionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateSessionUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateSessionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateSessionUsingGetQueryParams;
}
export declare class CreateSessionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createSessionUsingGET200ApplicationJSONObject?: CreateSessionUsingGet200ApplicationJson;
    createSessionUsingGET400ApplicationJSONObject?: CreateSessionUsingGet400ApplicationJson;
    createSessionUsingGET401ApplicationJSONObject?: CreateSessionUsingGet401ApplicationJson;
    createSessionUsingGET500ApplicationJSONObject?: CreateSessionUsingGet500ApplicationJson;
}
