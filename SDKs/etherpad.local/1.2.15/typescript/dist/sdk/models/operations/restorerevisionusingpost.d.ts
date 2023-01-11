import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreRevisionUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class RestoreRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPostRequest extends SpeakeasyBase {
    queryParams: RestoreRevisionUsingPostQueryParams;
}
export declare class RestoreRevisionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    restoreRevisionUsingPOST200ApplicationJSONObject?: RestoreRevisionUsingPost200ApplicationJson;
    restoreRevisionUsingPOST400ApplicationJSONObject?: RestoreRevisionUsingPost400ApplicationJson;
    restoreRevisionUsingPOST401ApplicationJSONObject?: RestoreRevisionUsingPost401ApplicationJson;
    restoreRevisionUsingPOST500ApplicationJSONObject?: RestoreRevisionUsingPost500ApplicationJson;
}
