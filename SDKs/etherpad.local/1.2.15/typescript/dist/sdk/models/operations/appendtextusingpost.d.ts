import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendTextUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
export declare class AppendTextUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingPostRequest extends SpeakeasyBase {
    queryParams: AppendTextUsingPostQueryParams;
}
export declare class AppendTextUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendTextUsingPOST200ApplicationJSONObject?: AppendTextUsingPost200ApplicationJson;
    appendTextUsingPOST400ApplicationJSONObject?: AppendTextUsingPost400ApplicationJson;
    appendTextUsingPOST401ApplicationJSONObject?: AppendTextUsingPost401ApplicationJson;
    appendTextUsingPOST500ApplicationJSONObject?: AppendTextUsingPost500ApplicationJson;
}
