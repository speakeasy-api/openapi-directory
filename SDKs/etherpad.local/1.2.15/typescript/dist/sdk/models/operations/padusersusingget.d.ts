import { SpeakeasyBase } from "../../../internal/utils";
export declare class PadUsersUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class PadUsersUsingGet200ApplicationJsonDataPadUsers extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class PadUsersUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padUsers?: PadUsersUsingGet200ApplicationJsonDataPadUsers[];
}
export declare class PadUsersUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: PadUsersUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class PadUsersUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingGetRequest extends SpeakeasyBase {
    queryParams: PadUsersUsingGetQueryParams;
}
export declare class PadUsersUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    padUsersUsingGET200ApplicationJSONObject?: PadUsersUsingGet200ApplicationJson;
    padUsersUsingGET400ApplicationJSONObject?: PadUsersUsingGet400ApplicationJson;
    padUsersUsingGET401ApplicationJSONObject?: PadUsersUsingGet401ApplicationJson;
    padUsersUsingGET500ApplicationJSONObject?: PadUsersUsingGet500ApplicationJson;
}
