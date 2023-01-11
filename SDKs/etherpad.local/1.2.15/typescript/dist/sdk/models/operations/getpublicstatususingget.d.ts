import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetPublicStatusUsingGet200ApplicationJsonData extends SpeakeasyBase {
    publicStatus?: boolean;
}
export declare class GetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetPublicStatusUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingGetRequest extends SpeakeasyBase {
    queryParams: GetPublicStatusUsingGetQueryParams;
}
export declare class GetPublicStatusUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPublicStatusUsingGET200ApplicationJSONObject?: GetPublicStatusUsingGet200ApplicationJson;
    getPublicStatusUsingGET400ApplicationJSONObject?: GetPublicStatusUsingGet400ApplicationJson;
    getPublicStatusUsingGET401ApplicationJSONObject?: GetPublicStatusUsingGet401ApplicationJson;
    getPublicStatusUsingGET500ApplicationJSONObject?: GetPublicStatusUsingGet500ApplicationJson;
}
