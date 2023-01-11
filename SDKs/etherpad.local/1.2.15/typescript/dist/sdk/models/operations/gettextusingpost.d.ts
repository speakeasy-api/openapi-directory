import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTextUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class GetTextUsingPost200ApplicationJsonData extends SpeakeasyBase {
    text?: string;
}
export declare class GetTextUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetTextUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetTextUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetTextUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetTextUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetTextUsingPostRequest extends SpeakeasyBase {
    queryParams: GetTextUsingPostQueryParams;
}
export declare class GetTextUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTextUsingPOST200ApplicationJSONObject?: GetTextUsingPost200ApplicationJson;
    getTextUsingPOST400ApplicationJSONObject?: GetTextUsingPost400ApplicationJson;
    getTextUsingPOST401ApplicationJSONObject?: GetTextUsingPost401ApplicationJson;
    getTextUsingPOST500ApplicationJSONObject?: GetTextUsingPost500ApplicationJson;
}
