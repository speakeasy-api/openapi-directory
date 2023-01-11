import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetHtmlUsingGetQueryParams extends SpeakeasyBase {
    html?: string;
    padID?: string;
}
export declare class SetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGetRequest extends SpeakeasyBase {
    queryParams: SetHtmlUsingGetQueryParams;
}
export declare class SetHtmlUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setHTMLUsingGET200ApplicationJSONObject?: SetHtmlUsingGet200ApplicationJson;
    setHTMLUsingGET400ApplicationJSONObject?: SetHtmlUsingGet400ApplicationJson;
    setHTMLUsingGET401ApplicationJSONObject?: SetHtmlUsingGet401ApplicationJson;
    setHTMLUsingGET500ApplicationJSONObject?: SetHtmlUsingGet500ApplicationJson;
}
