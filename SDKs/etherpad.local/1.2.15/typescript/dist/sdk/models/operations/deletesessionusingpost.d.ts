import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSessionUsingPostQueryParams extends SpeakeasyBase {
    sessionID?: string;
}
export declare class DeleteSessionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPostRequest extends SpeakeasyBase {
    queryParams: DeleteSessionUsingPostQueryParams;
}
export declare class DeleteSessionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteSessionUsingPOST200ApplicationJSONObject?: DeleteSessionUsingPost200ApplicationJson;
    deleteSessionUsingPOST400ApplicationJSONObject?: DeleteSessionUsingPost400ApplicationJson;
    deleteSessionUsingPOST401ApplicationJSONObject?: DeleteSessionUsingPost401ApplicationJson;
    deleteSessionUsingPOST500ApplicationJSONObject?: DeleteSessionUsingPost500ApplicationJson;
}
