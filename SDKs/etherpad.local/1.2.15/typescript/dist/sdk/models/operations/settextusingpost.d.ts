import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetTextUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
export declare class SetTextUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingPostRequest extends SpeakeasyBase {
    queryParams: SetTextUsingPostQueryParams;
}
export declare class SetTextUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setTextUsingPOST200ApplicationJSONObject?: SetTextUsingPost200ApplicationJson;
    setTextUsingPOST400ApplicationJSONObject?: SetTextUsingPost400ApplicationJson;
    setTextUsingPOST401ApplicationJSONObject?: SetTextUsingPost401ApplicationJson;
    setTextUsingPOST500ApplicationJSONObject?: SetTextUsingPost500ApplicationJson;
}
