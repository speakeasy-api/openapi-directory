import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreRevisionUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class RestoreRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGetRequest extends SpeakeasyBase {
    queryParams: RestoreRevisionUsingGetQueryParams;
}
export declare class RestoreRevisionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    restoreRevisionUsingGET200ApplicationJSONObject?: RestoreRevisionUsingGet200ApplicationJson;
    restoreRevisionUsingGET400ApplicationJSONObject?: RestoreRevisionUsingGet400ApplicationJson;
    restoreRevisionUsingGET401ApplicationJSONObject?: RestoreRevisionUsingGet401ApplicationJson;
    restoreRevisionUsingGET500ApplicationJSONObject?: RestoreRevisionUsingGet500ApplicationJson;
}
