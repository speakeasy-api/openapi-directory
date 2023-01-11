import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadWithoutHistoryUsingPostQueryParams extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
export declare class CopyPadWithoutHistoryUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPostRequest extends SpeakeasyBase {
    queryParams: CopyPadWithoutHistoryUsingPostQueryParams;
}
export declare class CopyPadWithoutHistoryUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadWithoutHistoryUsingPOST200ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost200ApplicationJson;
    copyPadWithoutHistoryUsingPOST400ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost400ApplicationJson;
    copyPadWithoutHistoryUsingPOST401ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost401ApplicationJson;
    copyPadWithoutHistoryUsingPOST500ApplicationJSONObject?: CopyPadWithoutHistoryUsingPost500ApplicationJson;
}
