import { SpeakeasyBase } from "../../../internal/utils";
export declare class MovePadUsingGetQueryParams extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
export declare class MovePadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingGetRequest extends SpeakeasyBase {
    queryParams: MovePadUsingGetQueryParams;
}
export declare class MovePadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    movePadUsingGET200ApplicationJSONObject?: MovePadUsingGet200ApplicationJson;
    movePadUsingGET400ApplicationJSONObject?: MovePadUsingGet400ApplicationJson;
    movePadUsingGET401ApplicationJSONObject?: MovePadUsingGet401ApplicationJson;
    movePadUsingGET500ApplicationJSONObject?: MovePadUsingGet500ApplicationJson;
}
