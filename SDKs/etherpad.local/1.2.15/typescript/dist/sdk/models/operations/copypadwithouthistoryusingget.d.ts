import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadWithoutHistoryUsingGetQueryParams extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
export declare class CopyPadWithoutHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGetRequest extends SpeakeasyBase {
    queryParams: CopyPadWithoutHistoryUsingGetQueryParams;
}
export declare class CopyPadWithoutHistoryUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadWithoutHistoryUsingGET200ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet200ApplicationJson;
    copyPadWithoutHistoryUsingGET400ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet400ApplicationJson;
    copyPadWithoutHistoryUsingGET401ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet401ApplicationJson;
    copyPadWithoutHistoryUsingGET500ApplicationJSONObject?: CopyPadWithoutHistoryUsingGet500ApplicationJson;
}
