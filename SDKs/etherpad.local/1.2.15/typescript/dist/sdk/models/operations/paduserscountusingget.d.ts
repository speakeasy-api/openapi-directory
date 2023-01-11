import { SpeakeasyBase } from "../../../internal/utils";
export declare class PadUsersCountUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class PadUsersCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padUsersCount?: number;
}
export declare class PadUsersCountUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: PadUsersCountUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class PadUsersCountUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingGetRequest extends SpeakeasyBase {
    queryParams: PadUsersCountUsingGetQueryParams;
}
export declare class PadUsersCountUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    padUsersCountUsingGET200ApplicationJSONObject?: PadUsersCountUsingGet200ApplicationJson;
    padUsersCountUsingGET400ApplicationJSONObject?: PadUsersCountUsingGet400ApplicationJson;
    padUsersCountUsingGET401ApplicationJSONObject?: PadUsersCountUsingGet401ApplicationJson;
    padUsersCountUsingGET500ApplicationJSONObject?: PadUsersCountUsingGet500ApplicationJson;
}
