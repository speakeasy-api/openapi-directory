import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPadIdUsingGetQueryParams extends SpeakeasyBase {
    roID?: string;
}
export declare class GetPadIdUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGetRequest extends SpeakeasyBase {
    queryParams: GetPadIdUsingGetQueryParams;
}
export declare class GetPadIdUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPadIDUsingGET200ApplicationJSONObject?: GetPadIdUsingGet200ApplicationJson;
    getPadIDUsingGET400ApplicationJSONObject?: GetPadIdUsingGet400ApplicationJson;
    getPadIDUsingGET401ApplicationJSONObject?: GetPadIdUsingGet401ApplicationJson;
    getPadIDUsingGET500ApplicationJSONObject?: GetPadIdUsingGet500ApplicationJson;
}
