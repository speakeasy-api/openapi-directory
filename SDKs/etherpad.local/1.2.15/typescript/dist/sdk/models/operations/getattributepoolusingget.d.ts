import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAttributePoolUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetAttributePoolUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGetRequest extends SpeakeasyBase {
    queryParams: GetAttributePoolUsingGetQueryParams;
}
export declare class GetAttributePoolUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAttributePoolUsingGET200ApplicationJSONObject?: GetAttributePoolUsingGet200ApplicationJson;
    getAttributePoolUsingGET400ApplicationJSONObject?: GetAttributePoolUsingGet400ApplicationJson;
    getAttributePoolUsingGET401ApplicationJSONObject?: GetAttributePoolUsingGet401ApplicationJson;
    getAttributePoolUsingGET500ApplicationJSONObject?: GetAttributePoolUsingGet500ApplicationJson;
}
