import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReadOnlyIdUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetReadOnlyIdUsingGet200ApplicationJsonData extends SpeakeasyBase {
    readOnlyID?: string;
}
export declare class GetReadOnlyIdUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetReadOnlyIdUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetReadOnlyIdUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingGetRequest extends SpeakeasyBase {
    queryParams: GetReadOnlyIdUsingGetQueryParams;
}
export declare class GetReadOnlyIdUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getReadOnlyIDUsingGET200ApplicationJSONObject?: GetReadOnlyIdUsingGet200ApplicationJson;
    getReadOnlyIDUsingGET400ApplicationJSONObject?: GetReadOnlyIdUsingGet400ApplicationJson;
    getReadOnlyIDUsingGET401ApplicationJSONObject?: GetReadOnlyIdUsingGet401ApplicationJson;
    getReadOnlyIDUsingGET500ApplicationJSONObject?: GetReadOnlyIdUsingGet500ApplicationJson;
}
