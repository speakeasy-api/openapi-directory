import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPadIdUsingPostQueryParams extends SpeakeasyBase {
    roID?: string;
}
export declare class GetPadIdUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPostRequest extends SpeakeasyBase {
    queryParams: GetPadIdUsingPostQueryParams;
}
export declare class GetPadIdUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPadIDUsingPOST200ApplicationJSONObject?: GetPadIdUsingPost200ApplicationJson;
    getPadIDUsingPOST400ApplicationJSONObject?: GetPadIdUsingPost400ApplicationJson;
    getPadIDUsingPOST401ApplicationJSONObject?: GetPadIdUsingPost401ApplicationJson;
    getPadIDUsingPOST500ApplicationJSONObject?: GetPadIdUsingPost500ApplicationJson;
}
