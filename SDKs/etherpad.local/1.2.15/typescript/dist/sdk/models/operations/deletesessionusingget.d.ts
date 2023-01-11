import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSessionUsingGetQueryParams extends SpeakeasyBase {
    sessionID?: string;
}
export declare class DeleteSessionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGetRequest extends SpeakeasyBase {
    queryParams: DeleteSessionUsingGetQueryParams;
}
export declare class DeleteSessionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteSessionUsingGET200ApplicationJSONObject?: DeleteSessionUsingGet200ApplicationJson;
    deleteSessionUsingGET400ApplicationJSONObject?: DeleteSessionUsingGet400ApplicationJson;
    deleteSessionUsingGET401ApplicationJSONObject?: DeleteSessionUsingGet401ApplicationJson;
    deleteSessionUsingGET500ApplicationJSONObject?: DeleteSessionUsingGet500ApplicationJson;
}
