import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetHtmlUsingPostQueryParams extends SpeakeasyBase {
    html?: string;
    padID?: string;
}
export declare class SetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPostRequest extends SpeakeasyBase {
    queryParams: SetHtmlUsingPostQueryParams;
}
export declare class SetHtmlUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setHTMLUsingPOST200ApplicationJSONObject?: SetHtmlUsingPost200ApplicationJson;
    setHTMLUsingPOST400ApplicationJSONObject?: SetHtmlUsingPost400ApplicationJson;
    setHTMLUsingPOST401ApplicationJSONObject?: SetHtmlUsingPost401ApplicationJson;
    setHTMLUsingPOST500ApplicationJSONObject?: SetHtmlUsingPost500ApplicationJson;
}
