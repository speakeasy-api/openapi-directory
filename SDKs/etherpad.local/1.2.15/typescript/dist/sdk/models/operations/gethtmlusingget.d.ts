import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHtmlUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class GetHtmlUsingGet200ApplicationJsonData extends SpeakeasyBase {
    html?: string;
}
export declare class GetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetHtmlUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetHtmlUsingGetRequest extends SpeakeasyBase {
    queryParams: GetHtmlUsingGetQueryParams;
}
export declare class GetHtmlUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHTMLUsingGET200ApplicationJSONObject?: GetHtmlUsingGet200ApplicationJson;
    getHTMLUsingGET400ApplicationJSONObject?: GetHtmlUsingGet400ApplicationJson;
    getHTMLUsingGET401ApplicationJSONObject?: GetHtmlUsingGet401ApplicationJson;
    getHTMLUsingGET500ApplicationJSONObject?: GetHtmlUsingGet500ApplicationJson;
}
