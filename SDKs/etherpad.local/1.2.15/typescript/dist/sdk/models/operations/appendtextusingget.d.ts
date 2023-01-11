import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendTextUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
export declare class AppendTextUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingGetRequest extends SpeakeasyBase {
    queryParams: AppendTextUsingGetQueryParams;
}
export declare class AppendTextUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendTextUsingGET200ApplicationJSONObject?: AppendTextUsingGet200ApplicationJson;
    appendTextUsingGET400ApplicationJSONObject?: AppendTextUsingGet400ApplicationJson;
    appendTextUsingGET401ApplicationJSONObject?: AppendTextUsingGet401ApplicationJson;
    appendTextUsingGET500ApplicationJSONObject?: AppendTextUsingGet500ApplicationJson;
}
