import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHtmlUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class GetHtmlUsingPost200ApplicationJsonData extends SpeakeasyBase {
    html?: string;
}
export declare class GetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetHtmlUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetHtmlUsingPostRequest extends SpeakeasyBase {
    queryParams: GetHtmlUsingPostQueryParams;
}
export declare class GetHtmlUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHTMLUsingPOST200ApplicationJSONObject?: GetHtmlUsingPost200ApplicationJson;
    getHTMLUsingPOST400ApplicationJSONObject?: GetHtmlUsingPost400ApplicationJson;
    getHTMLUsingPOST401ApplicationJSONObject?: GetHtmlUsingPost401ApplicationJson;
    getHTMLUsingPOST500ApplicationJSONObject?: GetHtmlUsingPost500ApplicationJson;
}
