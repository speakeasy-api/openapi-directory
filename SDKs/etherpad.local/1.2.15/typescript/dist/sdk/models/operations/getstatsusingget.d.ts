import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetStatsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatsUsingGET200ApplicationJSONObject?: GetStatsUsingGet200ApplicationJson;
    getStatsUsingGET400ApplicationJSONObject?: GetStatsUsingGet400ApplicationJson;
    getStatsUsingGET401ApplicationJSONObject?: GetStatsUsingGet401ApplicationJson;
    getStatsUsingGET500ApplicationJSONObject?: GetStatsUsingGet500ApplicationJson;
}
