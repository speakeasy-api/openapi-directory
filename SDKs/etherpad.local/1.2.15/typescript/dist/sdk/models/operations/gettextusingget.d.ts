import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTextUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class GetTextUsingGet200ApplicationJsonData extends SpeakeasyBase {
    text?: string;
}
export declare class GetTextUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetTextUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetTextUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetTextUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetTextUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetTextUsingGetRequest extends SpeakeasyBase {
    queryParams: GetTextUsingGetQueryParams;
}
export declare class GetTextUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTextUsingGET200ApplicationJSONObject?: GetTextUsingGet200ApplicationJson;
    getTextUsingGET400ApplicationJSONObject?: GetTextUsingGet400ApplicationJson;
    getTextUsingGET401ApplicationJSONObject?: GetTextUsingGet401ApplicationJson;
    getTextUsingGET500ApplicationJSONObject?: GetTextUsingGet500ApplicationJson;
}
