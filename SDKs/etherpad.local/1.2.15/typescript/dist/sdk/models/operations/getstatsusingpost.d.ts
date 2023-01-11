import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatsUsingPOST200ApplicationJSONObject?: GetStatsUsingPost200ApplicationJson;
    getStatsUsingPOST400ApplicationJSONObject?: GetStatsUsingPost400ApplicationJson;
    getStatsUsingPOST401ApplicationJSONObject?: GetStatsUsingPost401ApplicationJson;
    getStatsUsingPOST500ApplicationJSONObject?: GetStatsUsingPost500ApplicationJson;
}
